
// ================================================================
//  SATELLITE & CHANNEL DATABASE — circa 1994-1996
// ================================================================




// ================================================================
//  STATE
// ================================================================

const S = {
    satIdx: 14,         // G5 Galaxy 5
    tpIdx: 4,           // TP05 CNN
    dishPos: 125.0,
    targetPos: 125.0,
    dishMoving: false,
    signal: 92,
    targetSignal: 92,
    mode: 'locked',     // locked | retuning | acquiring | moving | no_signal
    scanning: false,
    osdExpiry: 0,
    frame: 0,
};

// Track which channel is rendered to avoid per-frame DOM thrash
let renderedKey = '';

// ================================================================
//  DOM REFS
// ================================================================

const canvas  = document.getElementById('static-canvas');
const ctx     = canvas.getContext('2d');
const cardEl  = document.getElementById('channel-card');
const scrEl   = document.getElementById('scramble-overlay');
const movEl   = document.getElementById('moving-overlay');
const osdEl   = document.getElementById('osd');

const ytWrap = document.getElementById('yt-wrap');

// ================================================================
//  VIDEO POOL — fallback C-band surfing clips for unmatched channels
// ================================================================

const videoPool = [];

// Time origin — persisted so channels don't restart on reload
const now = Date.now() / 1000;
const savedOrigin = parseFloat(localStorage.getItem('cband-origin') || '0');
const loadTime = savedOrigin || now;
if (!savedOrigin) localStorage.setItem('cband-origin', String(loadTime));
let timeOffset = parseFloat(localStorage.getItem('cband-timeoffset') || '0');

// ================================================================
//  COMMERCIAL BREAK SYSTEM
//  Each entry is one individual ad: {id, start, end}
//  Breaks are auto-inserted between content clips
// ================================================================


// Pick a commercial from the pool for a given position within a break
function getCommercial(posInBreak, seed) {
    if (commercials.length === 0) return null;
    const startIdx = seed % commercials.length;
    let pos = posInBreak;
    for (let i = 0; i < commercials.length; i++) {
        const ad = commercials[(startIdx + i) % commercials.length];
        const adDur = ad.end - ad.start;
        if (pos < adDur) {
            return { id: ad.id, start: ad.start + pos };
        }
        pos -= adDur;
    }
    const ad = commercials[startIdx];
    return { id: ad.id, start: ad.start };
}

// Cycles through content clips with commercial breaks between them
function getChannelVideo(satIdx, tpIdx) {
    const t = satellites[satIdx].transponders[tpIdx];
    const elapsed = (Date.now() / 1000) - loadTime + timeOffset;

    // Multi-clip: videos array
    if (t.videos && t.videos.length > 0) {
        const vids = t.videos;
        const useBreaks = !t.scrambled; // no commercial breaks on scrambled channels

        // Cycle: [content1][break][content2][break]... (or just content for scrambled)
        // Support both duration and end fields: end overrides duration
        const clipDur = v => v.end ? (v.end - (v.start || 0)) : (v.duration || 600);
        const totalDur = vids.reduce((sum, v) => sum + clipDur(v) + (useBreaks ? BREAK_DURATION : 0), 0);
        let pos = elapsed % totalDur;
        for (let i = 0; i < vids.length; i++) {
            const contentDur = clipDur(vids[i]);
            if (pos < contentDur) {
                // Playing content — clamp to avoid overshooting actual video length
                const seekTo = (vids[i].start || 0) + Math.min(pos, contentDur - 5);
                return { id: vids[i].id, start: Math.max(0, seekTo) };
            }
            pos -= contentDur;
            if (useBreaks) {
                if (pos < BREAK_DURATION) {
                    // Commercial break — each channel gets different ads via seed
                    return getCommercial(pos, satIdx * 100 + tpIdx * 10 + i);
                }
                pos -= BREAK_DURATION;
            }
        }
        return { id: vids[0].id, start: vids[0].start || 0 };
    }

    // Single clip: videoId field
    if (t.videoId) {
        const base = t.videoStart || 0;
        return { id: t.videoId, start: base + elapsed };
    }

    // Fallback: pool
    if (videoPool.length === 0) return null;
    const seed = satIdx * 31 + tpIdx * 7 + 13;
    const idx = seed % videoPool.length;
    const vid = videoPool[idx];
    const maxStart = Math.max(1, vid.duration - 60);
    const base = ((seed * 137 + 42) % maxStart);
    return { id: vid.id, start: base + elapsed };
}

function ytPlay(videoId, startTime) {
    if (!ytReady || !videoId) return;
    if (ytCurrentId === videoId) return;
    ytCurrentId = videoId;
    ytPlayer.loadVideoById({ videoId: videoId, startSeconds: startTime || 0 });
}

function ytStop() {
    if (!ytReady) return;
    ytCurrentId = '';
    try { ytPlayer.stopVideo(); } catch(e) {}
}

function ytShow() {
    ytWrap.style.display = 'block'; ytWrap.style.pointerEvents = 'none'; ytWrap.classList.remove('vc-scrambled');
    stopScrambleAudio();
    if (ytReady) try { ytPlayer.unMute(); ytPlayer.setVolume(100); } catch(e) {}
}
function ytHide() {
    ytWrap.style.opacity = '0'; ytWrap.classList.remove('vc-scrambled');
    stopScrambleAudio();
}

// ================================================================