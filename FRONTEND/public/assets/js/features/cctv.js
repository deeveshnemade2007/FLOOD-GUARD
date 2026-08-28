// CCTV Feed Modal Controls
function openCctvModal(camType) {
    const modal = document.getElementById('cctvModal');
    const title = document.getElementById('modalCamTitle');
    const img = document.getElementById('modalCamImg');
    const telemetry = document.getElementById('modalCamTelemetry');

    if (camType === 'khadakwasla') {
        title.innerHTML = `<i class="fa-solid fa-video text-danger"></i> CAM-01: KHADAKWASLA DAM SPILLWAY MONITORING`;
        img.src = 'assets/cctv_khadakwasla.jpg';
        telemetry.textContent = `SYSTEM STATUS: CRITICAL DANGER ZONE // DISCHARGE: ${state.dischargeCusecs.toLocaleString()} CUSECS // GATES: 8/8 OPEN`;
    } else {
        title.innerHTML = `<i class="fa-solid fa-video text-warning"></i> CAM-02: DECCAN MUTHA RIVER CAUSEWAY`;
        img.src = 'assets/cctv_deccan.jpg';
        telemetry.textContent = `SYSTEM STATUS: WATER LEVEL +1.8M OVER CAUSEWAY // ROAD CLOSED TO TRAFFIC`;
    }

    modal.classList.add('active');
}

function closeCctvModal() {
    document.getElementById('cctvModal').classList.remove('active');
}

function updateCctvTime() {
    const timeEl = document.getElementById('modalCamTime');
    if (timeEl) {
        timeEl.textContent = new Date().toLocaleString() + ' IST';
    }
}
