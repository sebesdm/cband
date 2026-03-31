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