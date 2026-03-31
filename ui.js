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