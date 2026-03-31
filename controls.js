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
