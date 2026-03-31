
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
//  YOUTUBE PLAYER
// ================================================================

let ytPlayer = null;
let ytReady = false;
let ytCurrentId = '';

// Load YouTube IFrame API
const ytTag = document.createElement('script');
ytTag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(ytTag);

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('yt-player', {
        width: 640, height: 480,
        playerVars: {
            autoplay: 1, controls: 0, modestbranding: 1, rel: 0,
            showinfo: 0, fs: 0, iv_load_policy: 3, disablekb: 1,
            playsinline: 1, cc_load_policy: 0, mute: 1,
        },
        events: {
            onReady: () => {
                ytReady = true;
                ytWrap.style.display = 'block';
                ytWrap.style.opacity = '0';
                ytWrap.style.pointerEvents = 'none';
            },
            onStateChange: (e) => {
                // Video ended — clear ID after cooldown to prevent strobe
                if (e.data === 0) {
                    setTimeout(() => { ytCurrentId = ''; }, 2000);
                }
                // Video playing — reveal; buffering — hide
                // Skip during movement and briefly after arrival
                if (S.dishMoving || (performance.now() - lastArrival) < 1500) return;
                if (e.data === 1) {
                    ytWrap.style.opacity = '1';
                } else if (e.data === 3 || e.data === -1) {
                    ytWrap.style.opacity = '0';
                }
            },
        }
    });
};

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
//  SCRAMBLED AUDIO — Web Audio API
// ================================================================

let audioCtx = null;
let scrAudioBuilt = false;
let scrAudioOn = false;
let scrGate = null;

function buildScrambleAudio() {
    if (scrAudioBuilt) return;
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return; }

    // Buzzy sawtooth base
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.value = 120;

    const osc2 = audioCtx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 187;

    // Mix oscillators — no LFO, just steady drone
    const mix = audioCtx.createGain();
    mix.gain.value = 0.1;
    osc1.connect(mix);
    osc2.connect(mix);

    // Crackle — white noise through aggressive highpass
    const bufSize = audioCtx.sampleRate * 2;
    const noiseBuf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) noiseData[i] = Math.random() * 2 - 1;
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const noiseHP = audioCtx.createBiquadFilter();
    noiseHP.type = 'highpass';
    noiseHP.frequency.value = 3000;
    noiseHP.Q.value = 0.5;
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.value = 0.25;
    noise.connect(noiseHP);
    noiseHP.connect(noiseGain);

    // Low rumble noise to muddy the source audio
    const noise2 = audioCtx.createBufferSource();
    noise2.buffer = noiseBuf;
    noise2.loop = true;
    const noiseLP = audioCtx.createBiquadFilter();
    noiseLP.type = 'lowpass';
    noiseLP.frequency.value = 400;
    noiseLP.Q.value = 1;
    const noise2Gain = audioCtx.createGain();
    noise2Gain.gain.value = 0.15;
    noise2.connect(noiseLP);
    noiseLP.connect(noise2Gain);

    // Muffling lowpass — makes it sound distant/muted
    const muffle = audioCtx.createBiquadFilter();
    muffle.type = 'lowpass';
    muffle.frequency.value = 2400;
    muffle.Q.value = 0.7;

    // Combine buzz + crackle + rumble into muffle filter
    mix.connect(muffle);
    noiseGain.connect(muffle);
    noise2Gain.connect(muffle);

    // Master volume
    const master = audioCtx.createGain();
    master.gain.value = 0.025;
    muffle.connect(master);

    // Gate for clean on/off
    scrGate = audioCtx.createGain();
    scrGate.gain.value = 0;
    master.connect(scrGate);
    scrGate.connect(audioCtx.destination);

    osc1.start(); osc2.start(); noise.start(); noise2.start();
    scrAudioBuilt = true;
}

function startScrambleAudio() {
    if (!scrAudioBuilt) buildScrambleAudio();
    if (!scrGate || scrAudioOn) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    scrGate.gain.setTargetAtTime(1, audioCtx.currentTime, 0.05);
    scrAudioOn = true;
}

function stopScrambleAudio() {
    if (!scrAudioOn || !scrGate) return;
    scrGate.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
    scrAudioOn = false;
}

// ================================================================
//  STATIC HISS + MOTOR HUM — built once, gated on/off
// ================================================================

let staticAudioBuilt = false;
let staticGate = null;
let motorGate = null;

function buildStaticAudio() {
    if (staticAudioBuilt) return;
    if (!audioCtx) {
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return; }
    }

    // --- Static hiss: white noise through bandpass ---
    const bufSize = audioCtx.sampleRate * 2;
    const noiseBuf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) nd[i] = Math.random() * 2 - 1;

    const hissNoise = audioCtx.createBufferSource();
    hissNoise.buffer = noiseBuf;
    hissNoise.loop = true;

    const hissFilter = audioCtx.createBiquadFilter();
    hissFilter.type = 'bandpass';
    hissFilter.frequency.value = 2000;
    hissFilter.Q.value = 0.5;

    const hissMaster = audioCtx.createGain();
    hissMaster.gain.value = 0.04;

    staticGate = audioCtx.createGain();
    staticGate.gain.value = 0;

    hissNoise.connect(hissFilter);
    hissFilter.connect(hissMaster);
    hissMaster.connect(staticGate);
    staticGate.connect(audioCtx.destination);
    hissNoise.start();

    // --- Motor hum: low oscillator + slight vibrato ---
    const motorOsc = audioCtx.createOscillator();
    motorOsc.type = 'sawtooth';
    motorOsc.frequency.value = 55;

    const motorOsc2 = audioCtx.createOscillator();
    motorOsc2.type = 'sine';
    motorOsc2.frequency.value = 110;

    const motorFilter = audioCtx.createBiquadFilter();
    motorFilter.type = 'lowpass';
    motorFilter.frequency.value = 200;
    motorFilter.Q.value = 1;

    const motorMix = audioCtx.createGain();
    motorMix.gain.value = 0.015;

    motorGate = audioCtx.createGain();
    motorGate.gain.value = 0;

    motorOsc.connect(motorMix);
    motorOsc2.connect(motorMix);
    motorMix.connect(motorFilter);
    motorFilter.connect(motorGate);
    motorGate.connect(audioCtx.destination);
    motorOsc.start();
    motorOsc2.start();

    staticAudioBuilt = true;
}

function setStaticHiss(on) {
    if (!staticAudioBuilt) buildStaticAudio();
    if (!staticGate) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    staticGate.gain.setTargetAtTime(on ? 1 : 0, audioCtx.currentTime, 0.08);
}

function setMotorHum(on) {
    if (!staticAudioBuilt) buildStaticAudio();
    if (!motorGate) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    motorGate.gain.setTargetAtTime(on ? 1 : 0, audioCtx.currentTime, 0.1);
}

// Small noise canvas for performant static
const nCvs = document.createElement('canvas');
nCvs.width = 160; nCvs.height = 120;
const nCtx = nCvs.getContext('2d');
const nImg = nCtx.createImageData(160, 120);

// ================================================================
//  HELPERS
// ================================================================

const sat  = () => satellites[S.satIdx];
const tp   = () => sat().transponders[S.tpIdx];
const hx2r = h => h ? { r:parseInt(h.slice(1,3),16), g:parseInt(h.slice(3,5),16), b:parseInt(h.slice(5,7),16) } : {r:60,g:60,b:60};

// Dish location: upstate New Hampshire (~43°N, 72°W)
const DISH_LAT = 43.0;
const DISH_LON = 72.0;

function dishAzEl(satLonW) {
    const lat = DISH_LAT * Math.PI / 180;
    const dlon = (satLonW - DISH_LON) * Math.PI / 180;
    // Azimuth (from North, clockwise)
    const az = 180 + Math.atan2(Math.tan(dlon), Math.sin(lat)) * 180 / Math.PI;
    // Elevation
    const R = 6.6107; // geostationary orbit radius / earth radius
    const cosG = Math.cos(lat) * Math.cos(dlon);
    const el = Math.atan((cosG - 1/R) / Math.sqrt(1 - cosG * cosG)) * 180 / Math.PI;
    return { az: az, el: el };
}

function timecode() {
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${pad(d.getMilliseconds()/33.3|0)}`;
}

// ================================================================
//  CANVAS RENDERING
// ================================================================

function drawStatic(alpha) {
    const d = nImg.data;
    for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 100;
        d[i] = d[i+1] = d[i+2] = v;
        d[i+3] = 255;
    }
    nCtx.putImageData(nImg, 0, 0);
    ctx.save();
    if (alpha !== undefined) ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(nCvs, 0, 0, 640, 480);
    ctx.restore();
}

function drawScrambled(t) {
    const now = performance.now() / 100;
    const rgb = hx2r(t.accent || t.color);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 640, 480);

    for (let y = 0; y < 480; y += 3) {
        const shift = Math.sin(y*0.15 + now*2.5)*120 + Math.sin(y*0.05 + now*0.7)*80;
        const b = 0.15 + Math.sin(y*0.02 + now)*0.25 + Math.random()*0.15;
        ctx.fillStyle = `rgb(${Math.min(255,rgb.r*b+Math.random()*30)|0},${Math.min(255,rgb.g*b+Math.random()*30)|0},${Math.min(255,rgb.b*b+Math.random()*30)|0})`;
        ctx.fillRect(shift - 200, y, 840, 3);
    }

    drawStatic(0.2);

    // Occasional ghost of channel name
    if (Math.random() < 0.018) {
        ctx.save();
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 56px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(t.name, 320, 240);
        ctx.restore();
    }
}

function drawColorBars() {
    const bars = ['#c0c0c0','#c0c000','#00c0c0','#00c000','#c000c0','#c00000','#0000c0'];
    const bw = 640/7;
    bars.forEach((c,i) => { ctx.fillStyle = c; ctx.fillRect(i*bw, 0, bw+1, 336); });

    const mid = ['#0000c0','#131313','#c000c0','#131313','#00c0c0','#131313','#c0c0c0'];
    mid.forEach((c,i) => { ctx.fillStyle = c; ctx.fillRect(i*bw, 336, bw+1, 38); });

    const bots = ['#00214c','#fff','#32006a','#131313'];
    const botW = 640/4;
    bots.forEach((c,i) => { ctx.fillStyle = c; ctx.fillRect(i*botW, 374, botW+1, 106); });

    ctx.fillStyle = '#aaa';
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${sat().name.toUpperCase()} \u2014 TP ${tp().num} \u2014 COLOR BARS`, 320, 458);
}

// ================================================================
//  CHANNEL CARD (HTML overlay)
// ================================================================

function showCard(t) {
    const key = `${S.satIdx}-${S.tpIdx}`;
    cardEl.style.display = 'flex';

    if (renderedKey === key) return;  // already rendered
    renderedKey = key;

    cardEl.style.background = '#000';

    const network = document.getElementById('ch-network');
    const logo = document.getElementById('ch-logo');
    const prog = document.getElementById('ch-program');
    const extra = document.getElementById('ch-extra');

    // Barker-style CRT text for all channel cards
    network.textContent = 'SUBSCRIBE NOW';
    logo.textContent = t.name;
    prog.textContent = '';
    extra.innerHTML = '1-800-555-2SAT';

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 640, 480);
}

function hideCard() {
    cardEl.style.display = 'none';
    renderedKey = '';
    ytHide();
    ytStop();
}

// ================================================================
//  OSD
// ================================================================

function showOSD(text, ms) {
    if (!tvOn || !rxOn) return;
    osdEl.textContent = text;
    osdEl.style.display = 'block';
    S.osdExpiry = performance.now() + (ms || 3000);
}

// ================================================================
//  RECEIVER DISPLAY
// ================================================================

function updateLED() {
    const s = sat(), t = tp();
    document.getElementById('d-sat').textContent   = s.short;
    const ae = dishAzEl(S.dishPos);
    document.getElementById('d-az').textContent    = ae.az.toFixed(1);
    document.getElementById('d-el').textContent    = ae.el.toFixed(1);
    document.getElementById('d-tp').textContent    = String(t.num).padStart(2,'0');
    document.getElementById('d-freq').textContent  = String(t.freq);
    document.getElementById('d-pol').textContent   = t.pol;
    document.getElementById('d-aud').textContent   = (t.audio || '6.20');
    // Signal: percent + block bar
    const sigPct = Math.max(0, S.signal) | 0;
    document.getElementById('d-signal-pct').textContent = sigPct + '%';
    const totalBlocks = 20;
    const filledBlocks = Math.round((sigPct / 100) * totalBlocks);
    document.getElementById('d-signal-bars').textContent = '\u2588'.repeat(filledBlocks) + '\u2591'.repeat(totalBlocks - filledBlocks);


    document.getElementById('ind-lock').className    = 'ind-led' + (S.mode==='locked' ? ' on-green' : '');
    document.getElementById('ind-vc').className      = 'ind-led' + (t.scrambled && S.mode==='locked' ? ' on-red' : '');
    document.getElementById('ind-stereo').className  = 'ind-led' + (t.stereo && S.mode==='locked' && !t.scrambled ? ' on-green' : t.stereo && S.mode==='locked' ? ' on-amber' : '');
}

// ================================================================
//  SATELLITE ARC
// ================================================================

function initArc() {
    const bar = document.getElementById('arc-bar');
    bar.innerHTML = '<div id="arc-dish"></div>';
    satellites.forEach((s, i) => {
        const pct = ((s.pos - 65) / 76) * 100;
        const m = document.createElement('div');
        m.className = 'arc-sat' + (i === S.satIdx ? ' active' : '');
        m.id = 'arc-' + i;
        m.style.left = pct + '%';
        m.innerHTML = '<div class="arc-sat-label">' + s.short + '</div>';
        m.onclick = () => goSat(i);
        m.style.cursor = 'pointer';
        bar.appendChild(m);
    });
    syncArc();
}

function syncArc() {
    document.getElementById('arc-dish').style.left = ((S.dishPos - 65) / 76 * 100) + '%';
    satellites.forEach((_, i) => {
        const el = document.getElementById('arc-' + i);
        if (el) el.className = 'arc-sat' + (i === S.satIdx ? ' active' : '');
    });
}

// ================================================================
//  CONTROLS
// ================================================================

function saveChannel() {
    try { localStorage.setItem('cband-channel', JSON.stringify({sat:S.satIdx, tp:S.tpIdx})); } catch(e) {}
}

let departureSat = -1;

function goSat(idx) {
    if (idx < 0) idx = satellites.length - 1;
    if (idx >= satellites.length) idx = 0;
    if (S.scanning) stopScan();
    fadeAudio();

    departureSat = S.satIdx;
    S.satIdx = idx;
    // Keep same TP, clamp if new sat has fewer transponders
    S.tpIdx = Math.min(S.tpIdx, satellites[idx].transponders.length - 1);
    S.targetPos = satellites[idx].pos;

    if (Math.abs(S.dishPos - S.targetPos) > 0.2) {
        S.mode = 'moving';
        S.dishMoving = true;
        S.signal = 0;
        S.targetSignal = 0;
        // Don't hideCard/ytHide — let sweep handle the transition
        cardEl.style.display = 'none';
        scrEl.style.display = 'none';
        renderedKey = '';
    } else {
        tune();
    }

    syncArc();
    showOSD(satellites[idx].short + ' \u2014 ' + satellites[idx].name + '\n' + satellites[idx].pos + ' DEG W', 3000);
    updateLED();
    saveChannel();
}

function fadeAudio() {
    if (ytReady) try { ytPlayer.setVolume(0); } catch(e) {}
    stopScrambleAudio();
}
function restoreAudio() {
    if (ytReady) try { ytPlayer.setVolume(volume); } catch(e) {}
}

function goTp(dir) {
    if (S.mode === 'moving') return;
    fadeAudio();
    const tps = sat().transponders;
    let ni = S.tpIdx + dir;
    if (ni < 0) ni = tps.length - 1;
    if (ni >= tps.length) ni = 0;

    S.tpIdx = ni;
    S.mode = 'retuning';
    S.signal = 0;
    hideCard();
    scrEl.style.display = 'none';

    const t = tp();
    showOSD('TP ' + String(t.num).padStart(2,'0') + ' ' + t.pol + ' ' + t.freq + '\n' + (t.name || 'NO SIGNAL'), 2500);

    setTimeout(() => { if (S.mode === 'retuning') tune(); }, 300);
    updateLED();
    saveChannel();
}

function tune() {
    const t = tp();
    if (!t.name) {
        S.mode = 'no_signal';
        S.targetSignal = 0;
        S.signal = 0;
        hideCard();
        scrEl.style.display = 'none';
    } else if (t.videos || t.scrambled) {
        // Has content — skip straight to locked
        S.mode = 'locked';
        S.signal = 72 + Math.random() * 23;
        S.targetSignal = S.signal;
        restoreAudio();
    } else {
        S.mode = 'acquiring';
        S.targetSignal = 72 + Math.random() * 23;
    }
    updateLED();
}

// Scan
let scanTimeout = null;

function startScan() {
    if (S.scanning) { stopScan(); return; }
    if (S.mode === 'moving') return;
    S.scanning = true;
    document.getElementById('btn-scan').classList.add('active');
    showOSD('SCANNING...', 2000);
    scanStep();
}

function stopScan() {
    S.scanning = false;
    document.getElementById('btn-scan').classList.remove('active');
    if (scanTimeout) { clearTimeout(scanTimeout); scanTimeout = null; }
}

function scanStep() {
    if (!S.scanning) return;
    const tps = sat().transponders;
    let ni = S.tpIdx + 1;
    if (ni >= tps.length) ni = 0;

    S.tpIdx = ni;
    const t = tp();
    showOSD('SCAN: TP ' + String(t.num).padStart(2,'0') + ' ' + t.pol + ' ' + t.freq + '\n' + (t.name || '\u2014'), 1500);

    if (t.name) {
        S.mode = 'acquiring';
        S.signal = 0;
        S.targetSignal = 72 + Math.random() * 23;
        hideCard();
        scrEl.style.display = 'none';
        scanTimeout = setTimeout(() => { if (S.scanning) scanStep(); }, 3500);
    } else {
        S.mode = 'no_signal';
        S.signal = 0;
        S.targetSignal = 0;
        hideCard();
        scrEl.style.display = 'none';
        scanTimeout = setTimeout(() => { if (S.scanning) scanStep(); }, 500);
    }
    updateLED();
}

// ================================================================
//  MAIN LOOP
// ================================================================

function loop(ts) {
    S.frame++;

    // --- TV off: black screen, skip everything ---
    if (!tvOn) {
        requestAnimationFrame(loop);
        return;
    }

    // --- TV on but receiver off: just static ---
    if (!rxOn) {
        drawStatic();
        setStaticHiss(true);
        setMotorHum(false);
        ytWrap.style.opacity = '0';
        cardEl.style.display = 'none';
        requestAnimationFrame(loop);
        return;
    }

    // --- Dish motor ---
    if (S.dishMoving) {
        const diff = S.targetPos - S.dishPos;
        const step = Math.sign(diff) * Math.min(Math.abs(diff), 1.0 / 60);
        S.dishPos += step;

        if (Math.abs(S.dishPos - S.targetPos) < 0.05) {
            S.dishPos = S.targetPos;
            S.dishMoving = false;
            movEl.style.display = 'none';
            lastArrival = performance.now();
            // Keep whatever is playing — tune will load the right clip
            // Force clear the canvas behind so no static shows
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, 640, 480);
            ytWrap.style.opacity = '1';
            // Restore volume
            if (ytReady) try { ytPlayer.setVolume(volume); } catch(e) {}
            tune();
        }
        syncArc();
    }

    // --- Signal ramp ---
    if (S.mode === 'acquiring') {
        S.signal = Math.min(S.signal + 1.8, S.targetSignal);
        if (S.signal >= S.targetSignal - 0.5) {
            S.mode = 'locked';
            S.signal = S.targetSignal;
            restoreAudio();
        }
    }
    if (S.mode === 'no_signal' || S.mode === 'retuning') {
        S.signal = Math.max(0, S.signal - 6);
    }

    // --- Screen render ---
    const t = tp();

    if (S.mode === 'moving') {
        setMotorHum(true);
        // Check if dish is passing near any satellite
        let nearestSat = null;
        let nearestDist = Infinity;
        for (let si = 0; si < satellites.length; si++) {
            const dist = Math.abs(S.dishPos - satellites[si].pos);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestSat = si;
            }
        }

        if (nearestDist < 1.5 && nearestSat !== null) {
            // Passing near a satellite — show its content through static
            const proxSat = satellites[nearestSat];
            let sweepTp = null;

            if (nearestSat === S.satIdx || nearestSat === departureSat) {
                // Destination or departure — only show current TP's content (no fallback)
                const currentTp = proxSat.transponders[S.tpIdx];
                if (currentTp && currentTp.videos && !currentTp.scrambled) {
                    sweepTp = S.tpIdx;
                }
            } else {
                // Passing satellite — use current TP or fall back to first with videos
                const currentTp = proxSat.transponders[S.tpIdx];
                if (currentTp && currentTp.videos && !currentTp.scrambled) {
                    sweepTp = S.tpIdx;
                } else {
                    for (let ti = 0; ti < proxSat.transponders.length; ti++) {
                        const t = proxSat.transponders[ti];
                        if (t.videos && !t.scrambled) { sweepTp = ti; break; }
                    }
                }
            }
            if (sweepTp !== null) {
                const sweepVid = getChannelVideo(nearestSat, sweepTp);
                if (sweepVid) {
                    ytPlay(sweepVid.id, sweepVid.start);
                    ytWrap.style.display = 'block';
                    ytWrap.style.pointerEvents = 'none';
                    ytWrap.classList.remove('vc-scrambled');
                    // Opacity based on proximity: 1.0 at dead center, 0 at 1.5° away
                    const clarity = Math.max(0, 1 - (nearestDist / 1.5));
                    ytWrap.style.opacity = String(clarity * 0.7);
                    // Audio fades with proximity
                    if (ytReady) try { ytPlayer.unMute(); ytPlayer.setVolume(Math.round(clarity * 40)); } catch(e) {}
                    // Static hiss dips as signal comes in
                    if (staticGate) staticGate.gain.setTargetAtTime(1 - clarity * 0.7, audioCtx.currentTime, 0.05);
                    // Static overlay — heavier when further from center
                    drawStatic(1 - clarity * 0.8);
                } else {
                    drawStatic();
                    ytWrap.style.opacity = '0';
                    if (ytReady) try { ytPlayer.setVolume(0); } catch(e) {}
                }
            } else {
                drawStatic();
                ytWrap.style.opacity = '0';
                if (ytReady) try { ytPlayer.setVolume(0); } catch(e) {}
            }
        } else {
            // Not near any satellite — just static
            drawStatic();
            ytWrap.style.opacity = '0';
            if (ytReady) try { ytPlayer.setVolume(0); } catch(e) {}
            setStaticHiss(true);
        }
        cardEl.style.display = 'none';

    } else if (S.mode === 'no_signal' || S.mode === 'retuning') {
        drawStatic();
        setStaticHiss(true);
        setMotorHum(false);
        ytWrap.style.opacity = '0';
        ytStop();
        cardEl.style.display = 'none';
        renderedKey = '';
        scrEl.style.display = 'none';

    } else if (S.mode === 'acquiring') {
        const p = S.signal / S.targetSignal;
        // Check if this clear channel has a pooled video
        const acqVid = (!t.scrambled && t.name && t.type !== 'test') ? getChannelVideo(S.satIdx, S.tpIdx) : null;

        // Check for scrambled channel video
        const scrVid = (t.scrambled && t.videos) ? getChannelVideo(S.satIdx, S.tpIdx) : null;

        if (t.type === 'test' && !t.videos) {
            drawColorBars();
            drawStatic(1 - p);
        } else if (t.type === 'test' && t.videos) {
            // Test pattern with real YouTube bars
            const testVid = getChannelVideo(S.satIdx, S.tpIdx);
            ytPlay(testVid.id, testVid.start);
            if (p > 0.55) { ytShow(); ytWrap.style.opacity = Math.min(1, (p - 0.55) * 2.2); }
            drawStatic(1 - p);
        } else if (t.scrambled && scrVid) {
            // Scrambled with real content underneath — CSS filter + audio
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, 640, 480);
            ytPlay(scrVid.id, scrVid.start);
            if (ytReady) try { ytPlayer.unMute(); ytPlayer.setVolume(75); } catch(e) {}
            startScrambleAudio();
            if (p > 0.5) {
                ytWrap.style.display = 'block';
                ytWrap.style.pointerEvents = 'none';
                ytWrap.classList.add('vc-scrambled');
                ytWrap.style.opacity = Math.min(1, (p - 0.5) * 2);
                scrEl.style.display = 'flex';
                scrEl.style.opacity = Math.min(1, (p - 0.5) * 2);
            }
            cardEl.style.display = 'none';
        } else if (t.scrambled) {
            drawStatic(1 - p);
            hideCard();
        } else if (acqVid) {
            // YouTube from pool — start loading, fade in from static
            ytPlay(acqVid.id, acqVid.start);
            if (p > 0.55) {
                ytShow();
                ytWrap.style.opacity = Math.min(1, (p - 0.55) * 2.2);
                cardEl.style.display = 'none';
            }
            drawStatic(1 - p);
        } else {
            if (p > 0.55) {
                showCard(t);
                cardEl.style.opacity = Math.min(1, (p - 0.55) * 2.2);
            }
            drawStatic(1 - p);
        }

    } else if (S.mode === 'locked') {
        setMotorHum(false);
        setStaticHiss(false);
        // Check if this clear channel has a pooled video
        const lockVid = (!t.scrambled && t.name && t.type !== 'test') ? getChannelVideo(S.satIdx, S.tpIdx) : null;
        const lockScrVid = (t.scrambled && t.videos) ? getChannelVideo(S.satIdx, S.tpIdx) : null;

        if (t.type === 'test' && !t.videos) {
            drawColorBars();
            hideCard();
            scrEl.style.display = 'none';
        } else if (t.type === 'test' && t.videos) {
            const testVid = getChannelVideo(S.satIdx, S.tpIdx);
            ytPlay(testVid.id, testVid.start);
            ytShow(); drawStatic();
            cardEl.style.display = 'none'; scrEl.style.display = 'none';
        } else if (t.scrambled && lockScrVid) {
            // Scrambled with real content — YouTube + CSS distortion + audio
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, 640, 480);
            ytPlay(lockScrVid.id, lockScrVid.start);
            if (ytReady) try { ytPlayer.unMute(); ytPlayer.setVolume(75); } catch(e) {}
            startScrambleAudio();
            ytWrap.style.display = 'block';
            ytWrap.style.pointerEvents = 'none';
            ytWrap.classList.add('vc-scrambled');
            ytWrap.style.opacity = 1;
            scrEl.style.display = 'flex';
            scrEl.style.opacity = 1;
            cardEl.style.display = 'none';
        } else if (t.scrambled) {
            drawStatic();
            ytWrap.style.opacity = '0';
            cardEl.style.display = 'none';
        } else if (lockVid) {
            // YouTube from pool — static shows while buffering
            ytPlay(lockVid.id, lockVid.start);
            ytShow();
            // Don't force opacity — onStateChange controls it
            cardEl.style.display = 'none';
            scrEl.style.display = 'none';
            drawStatic();
        } else {
            // Fallback to channel card (when pool is empty)
            showCard(t);
            cardEl.style.opacity = 1;
            scrEl.style.display = 'none';
            ytHide();
        }
        // Gentle signal wobble
        S.signal = S.targetSignal + Math.sin(ts / 500) * 1.5 + Math.random() * 1;
    }

    // Live timecode for wild feeds
    if (S.mode === 'locked' && t.type === 'wild_feed') {
        const tc = document.getElementById('live-tc');
        if (tc) tc.textContent = timecode();
    }

    // OSD timeout
    if (osdEl.style.display !== 'none' && performance.now() > S.osdExpiry) {
        osdEl.style.display = 'none';
    }

    // LED update — every frame during motor movement, every 6 frames otherwise
    if (S.dishMoving || S.frame % 6 === 0) updateLED();

    // Debug display
    if (S.frame % 30 === 0) {
        const el = (Date.now()/1000) - loadTime + timeOffset;
        const mins = (el/60)|0;
        const hrs = (mins/60)|0;
        document.getElementById('dbg-elapsed').textContent = 'T+' + hrs + 'h' + String(mins%60).padStart(2,'0') + 'm';
        const cv = (!t.scrambled && t.name && t.type !== 'test') ? getChannelVideo(S.satIdx, S.tpIdx) : null;
        const dbgClip = document.getElementById('dbg-clip');
        if (cv) {
            const url = 'https://www.youtube.com/watch?v=' + cv.id + '&t=' + (cv.start|0) + 's';
            dbgClip.textContent = url.replace('https://www.','');
            dbgClip.href = url;
        } else {
            dbgClip.textContent = '(no clip)';
            dbgClip.removeAttribute('href');
        }
    }

    requestAnimationFrame(loop);
}

// ================================================================
//  EVENTS
// ================================================================

// === TV POWER STATE ===
let tvOn = false;
let lastArrival = 0;
let rxOn = false;

function rxPowerToggle() {
    rxOn = !rxOn;
    document.getElementById('rx-power-btn').classList.toggle('on', rxOn);
    if (rxOn && tvOn) {
        // Receiver just turned on while TV is on — tune in
        S.mode = 'acquiring';
        S.signal = 0;
        S.targetSignal = 72 + Math.random() * 23;
        hideCard();
        showOSD(sat().short + ' \u2014 ' + sat().name + '\nTP ' + String(tp().num).padStart(2,'0') + ' \u2014 ' + tp().name, 4000);
    }
    if (!rxOn) {
        // Receiver off — kill audio/video
        fadeAudio();
        ytWrap.style.opacity = '0';
        cardEl.style.display = 'none';
        osdEl.style.display = 'none';
    }
    // Toggle LED values visibility
    document.querySelectorAll('.led-value, .led-big').forEach(el => {
        el.style.visibility = rxOn ? 'visible' : 'hidden';
    });
    // Toggle arc bar ticks and labels
    document.querySelectorAll('.arc-sat, .arc-sat-label, #arc-dish').forEach(el => {
        el.style.visibility = rxOn ? 'visible' : 'hidden';
    });
    // Toggle indicator lights
    document.querySelectorAll('.ind-led').forEach(el => {
        if (!rxOn) el.className = 'ind-led';
    });
}

function powerToggle() {
    tvOn = !tvOn;
    const btn = document.getElementById('power-btn');
    btn.classList.toggle('on', tvOn);

    if (tvOn) {
        // Power ON — CRT warm-up then show content
        const sw = document.getElementById('screen-wrap');
        sw.classList.remove('warming-up');
        void sw.offsetWidth; // force reflow
        sw.classList.add('warming-up');
        setTimeout(() => sw.classList.remove('warming-up'), 1600);

        if (ytReady) {
            try { ytPlayer.unMute(); ytPlayer.setVolume(100); } catch(e) {}
        }
        S.mode = 'acquiring';
        S.signal = 0;
        S.targetSignal = 72 + Math.random() * 23;
        hideCard();
        scrEl.style.display = 'none';
        showOSD(sat().short + ' \u2014 ' + sat().name + '\nTP ' + String(tp().num).padStart(2,'0') + ' \u2014 ' + tp().name, 4000);
    } else {
        // Power OFF — mute, black screen
        if (ytReady) {
            try { ytPlayer.mute(); } catch(e) {}
        }
        stopScrambleAudio();
        setStaticHiss(false);
        setMotorHum(false);
        ytWrap.style.opacity = '0';
        cardEl.style.display = 'none';
        renderedKey = '';
        scrEl.style.display = 'none';
        movEl.style.display = 'none';
        osdEl.style.display = 'none';
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 640, 480);
    }
}

document.getElementById('btn-sat-dn').onclick = () => goSat(S.satIdx - 1);
document.getElementById('btn-sat-up').onclick = () => goSat(S.satIdx + 1);
document.getElementById('btn-tp-dn').onclick  = () => goTp(1);
document.getElementById('btn-tp-up').onclick  = () => goTp(-1);
document.getElementById('btn-scan').onclick   = startScan;

let volume = 100;
let debugVisible = true;

const ledColors = [
    { color: '#00cc00', glow: 'rgba(0,204,0,0.35)', bg: '#081408', dim: '#1e4a1e', arc: '#2a4a2a', arcActive: '#00bb00', arcGlow: 'rgba(0,187,0,0.4)', dish: '#009900', dishBorder: '#00ee00', dishGlow: 'rgba(0,238,0,0.3)', name: 'green' },
    { color: '#ddcc00', glow: 'rgba(221,204,0,0.35)', bg: '#141408', dim: '#4a4a1e', arc: '#4a4a2a', arcActive: '#bbbb00', arcGlow: 'rgba(187,187,0,0.4)', dish: '#999900', dishBorder: '#dddd00', dishGlow: 'rgba(221,221,0,0.3)', name: 'amber' },
    { color: '#ff3333', glow: 'rgba(255,51,51,0.35)', bg: '#140808', dim: '#4a1e1e', arc: '#4a2a2a', arcActive: '#bb0000', arcGlow: 'rgba(187,0,0,0.4)', dish: '#990000', dishBorder: '#ee0000', dishGlow: 'rgba(238,0,0,0.3)', name: 'red' },
    { color: '#00cccc', glow: 'rgba(0,204,204,0.35)', bg: '#081414', dim: '#1e4a4a', arc: '#2a4a4a', arcActive: '#00bbbb', arcGlow: 'rgba(0,187,187,0.4)', dish: '#009999', dishBorder: '#00eeee', dishGlow: 'rgba(0,238,238,0.3)', name: 'cyan' },
];
let ledColorIdx = 0;

function cycleLedColor(dir) {
    ledColorIdx = (ledColorIdx + dir + ledColors.length) % ledColors.length;
    const lc = ledColors[ledColorIdx];
    // LED text
    document.querySelectorAll('.led-value, .led-big').forEach(el => {
        el.style.color = lc.color;
        el.style.textShadow = '0 0 8px ' + lc.glow;
    });
    // Display backgrounds
    document.querySelectorAll('.rx-display-panel').forEach(el => { el.style.background = lc.bg; });
    // Arc bar satellites
    document.querySelectorAll('.arc-sat').forEach(el => {
        el.style.background = el.classList.contains('active') ? lc.arcActive : lc.arc;
        el.style.boxShadow = el.classList.contains('active') ? '0 0 6px ' + lc.arcGlow : 'none';
    });
    document.querySelectorAll('.arc-sat-label').forEach(el => {
        el.style.color = el.parentElement.classList.contains('active') ? lc.color : lc.arc;
    });
    // Dish indicator
    const dish = document.getElementById('arc-dish');
    if (dish) {
        dish.style.background = lc.dish;
        dish.style.borderColor = lc.dishBorder;
        dish.style.boxShadow = '0 0 10px ' + lc.dishGlow;
    }
    showOSD('LED: ' + lc.name.toUpperCase(), 1000);
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowLeft':  e.preventDefault(); goSat(S.satIdx - 1); break;
        case 'ArrowRight': e.preventDefault(); goSat(S.satIdx + 1); break;
        case 'ArrowUp':    e.preventDefault(); goTp(-1); break;
        case 'ArrowDown':  e.preventDefault(); goTp(1); break;
        case 's': case 'S': startScan(); break;
        case 'Escape':     stopScan(); break;
        case 'm': case 'M': timeOffset += 60; ytCurrentId = ''; localStorage.setItem('cband-timeoffset', String(timeOffset)); break;
        case 'h': case 'H': timeOffset += 3600; ytCurrentId = ''; localStorage.setItem('cband-timeoffset', String(timeOffset)); break;
        case 'n': case 'N': // Skip to next clip
            timeOffset += 600; ytCurrentId = '';
            localStorage.setItem('cband-timeoffset', String(timeOffset));
            showOSD('SKIP >>', 1000);
            break;
        case '+': case '=': // Volume up
            volume = Math.min(100, volume + 10);
            if (ytReady) try { ytPlayer.setVolume(volume); } catch(e2) {}
            showOSD('VOL ' + volume, 1000);
            break;
        case '-': case '_': // Volume down
            volume = Math.max(0, volume - 10);
            if (ytReady) try { ytPlayer.setVolume(volume); } catch(e2) {}
            showOSD('VOL ' + volume, 1000);
            break;
        case 'd': case 'D': // Toggle debug
            debugVisible = !debugVisible;
            document.getElementById('debug').style.display = debugVisible ? 'block' : 'none';
            break;
        case ']': cycleLedColor(1); break;
        case '[': cycleLedColor(-1); break;
    }
});

// ================================================================
//  INIT
// ================================================================

// Restore last channel from localStorage
try {
    const saved = JSON.parse(localStorage.getItem('cband-channel'));
    if (saved && saved.sat >= 0 && saved.sat < satellites.length) {
        S.satIdx = saved.sat;
        S.tpIdx = Math.min(saved.tp || 0, satellites[saved.sat].transponders.length - 1);
        S.dishPos = satellites[saved.sat].pos;
        S.targetPos = S.dishPos;
    }
} catch(e) {}

initArc();
S.signal = 0;
S.targetSignal = 0;
S.mode = 'locked';
updateLED();
// Both start OFF
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 640, 480);
// Hide receiver elements on init
document.querySelectorAll('.led-value, .led-big').forEach(el => { el.style.visibility = 'hidden'; });
document.querySelectorAll('.arc-sat, .arc-sat-label, #arc-dish').forEach(el => { el.style.visibility = 'hidden'; });
document.querySelectorAll('.ind-led').forEach(el => { el.className = 'ind-led'; });
requestAnimationFrame(loop);
