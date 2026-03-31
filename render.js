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