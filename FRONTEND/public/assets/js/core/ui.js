// View Switcher (Citizen vs Govt Control Room Dark Mode)
function switchView(viewName) {
    state.currentView = viewName;
    
    document.querySelectorAll('.view-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.toggle-btn').forEach(el => el.classList.remove('active'));
    
    if (viewName === 'citizen') {
        document.getElementById('citizenView').classList.add('active');
        document.getElementById('btnCitizenView').classList.add('active');
    } else {
        document.getElementById('govtView').classList.add('active');
        document.getElementById('btnGovtView').classList.add('active');
    }

    // Invalidate map size so Leaflet resizes correctly
    if (state.map) {
        setTimeout(() => state.map.invalidateSize(), 200);
    }
}

// Audio Siren Synthesizer
function toggleAudioSiren() {
    const sirenBtn = document.getElementById('sirenBtn');
    const sirenText = document.getElementById('sirenText');
    
    if (!state.sirenActive) {
        try {
            state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            state.sirenOscillator = state.audioCtx.createOscillator();
            state.sirenGain = state.audioCtx.createGain();
            
            state.sirenOscillator.type = 'sawtooth';
            state.sirenOscillator.frequency.setValueAtTime(440, state.audioCtx.currentTime);
            
            // Frequency Modulation for Siren Pitch
            let freq = 440;
            let goingUp = true;
            setInterval(() => {
                if (!state.sirenActive) return;
                if (goingUp) {
                    freq += 30;
                    if (freq >= 880) goingUp = false;
                } else {
                    freq -= 30;
                    if (freq <= 440) goingUp = true;
                }
                if (state.sirenOscillator) {
                    state.sirenOscillator.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
                }
            }, 50);

            state.sirenGain.gain.setValueAtTime(0.15, state.audioCtx.currentTime);
            state.sirenOscillator.connect(state.sirenGain);
            state.sirenGain.connect(state.audioCtx.destination);
            
            state.sirenOscillator.start();
            state.sirenActive = true;
            sirenBtn.classList.add('active');
            sirenText.textContent = "STOP ALARM";
        } catch (e) {
            console.error("Audio synth error:", e);
        }
    } else {
        if (state.sirenOscillator) {
            state.sirenOscillator.stop();
            state.sirenOscillator.disconnect();
        }
        state.sirenActive = false;
        sirenBtn.classList.remove('active');
        sirenText.textContent = "ALARM SOUND";
    }
}
