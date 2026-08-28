// ==========================================================================
// GOVERNMENT CONTROL ROOM INCIDENTS & DISPATCHER
// ==========================================================================
function renderIncidentList() {
    const listEl = document.getElementById('incidentList');
    const badgeEl = document.getElementById('incidentBadge');
    
    if (!listEl) return;

    const pendingCount = state.citizenReports.filter(r => r.status === 'PENDING_RESCUE').length;
    if (badgeEl) badgeEl.textContent = `${pendingCount} PENDING DISPATCH`;

    listEl.innerHTML = state.citizenReports.map(item => `
        <div class="incident-card-item ${item.status === 'DISPATCHED' ? 'dispatched' : ''}">
            <div class="inc-info">
                <h4>${item.name} (${item.phone}) <span class="badge ${item.status === 'DISPATCHED' ? 'badge-success' : 'badge-danger'}">${item.status}</span></h4>
                <p>📍 <strong>${item.area}</strong> | Depth: <strong>${item.depth}</strong></p>
                <p>🆘 Need: <strong>${item.category}</strong></p>
                <p class="text-muted" style="font-size: 11px;">"${item.description}"</p>
            </div>
            <div style="text-align: right;">
                <div class="inc-time">${item.time}</div>
                ${item.status === 'PENDING_RESCUE' ? `
                    <button class="btn btn-warning" style="padding: 4px 10px; font-size: 11px; margin-top: 6px;" onclick="dispatchRescueUnit('${item.id}')">
                        <i class="fa-solid fa-truck-medical"></i> DISPATCH NDRF UNIT
                    </button>
                ` : `
                    <div style="font-size: 11px; color: #10b981; margin-top: 6px;">
                        <i class="fa-solid fa-circle-check"></i> ${item.assignedUnit || 'NDRF Unit 5 Assigned'}
                    </div>
                `}
            </div>
        </div>
    `).join('');

    // Update count metric in Govt HUD
    const hudCount = document.getElementById('govtIncidentCount');
    if (hudCount) hudCount.textContent = `${state.citizenReports.length} Active SOS`;
}

function dispatchRescueUnit(reportId) {
    const report = state.citizenReports.find(r => r.id === reportId);
    if (report) {
        report.status = 'DISPATCHED';
        report.assignedUnit = 'NDRF Battalion 5 (Team Charlie)';
        renderIncidentList();
        renderMapSosMarkers();
        alert(`🚨 RESCUE DISPATCH CONFIRMED:\nNDRF Battalion 5 (Team Charlie) dispatched to ${report.name} at ${report.area}!`);
    }
}

// ==========================================================================
// AI FLOOD PROBABILITY SIMULATOR SLIDERS
// ==========================================================================
function updateFloodSim() {
    const discharge = parseInt(document.getElementById('sliderDischarge').value);
    const rain = parseFloat(document.getElementById('sliderRain').value);

    state.dischargeCusecs = discharge;
    state.rainfallMmHr = rain;

    // AI Flood Probability Mathematical Calculation
    const prob = Math.min(99.9, ((discharge / 150000) * 60) + ((rain / 150) * 40)).toFixed(1);
    state.riskPercent = prob;

    // Water level scaling estimation
    const waterLvl = (14.5 + (discharge / 150000) * 6.0).toFixed(1);
    state.waterLevelMeters = waterLvl;

    // Update UI elements
    document.getElementById('sliderDischargeVal').textContent = `${discharge.toLocaleString()} Cusecs`;
    document.getElementById('sliderRainVal').textContent = `${rain} mm/hr`;
    document.getElementById('simRiskPercent').textContent = `${prob}%`;
    document.getElementById('headerRiskPercent').textContent = `${prob}%`;
    document.getElementById('headerRiskBar').style.width = `${prob}%`;
    document.getElementById('govtDischargeVal').textContent = `${discharge.toLocaleString()} Cusecs`;
    document.getElementById('govtWaterLvl').textContent = `${waterLvl} meters`;
    document.getElementById('govtRainfall').textContent = `${rain} mm/hr`;
    document.getElementById('headerWaterLevel').innerHTML = `${waterLvl} m <span class="text-xs">(+${(waterLvl - 16.5).toFixed(1)}m)</span>`;
    document.getElementById('headerDischarge').textContent = `${discharge.toLocaleString()} Cusecs`;

    const statusEl = document.getElementById('simRiskStatus');
    if (prob > 75) {
        statusEl.textContent = "CRITICAL DANGER ZONE // AUTOMATED RESCUE DISPATCH TRIGGERED";
        statusEl.className = "sim-result-status text-danger";
    } else if (prob > 45) {
        statusEl.textContent = "WARNING LEVEL // PREPARE EVACUATION ROUTE";
        statusEl.className = "sim-result-status text-warning";
    } else {
        statusEl.textContent = "MODERATE // REGULAR RIVERBANK MONITORING";
        statusEl.className = "sim-result-status text-success";
    }
}

// Mass Broadcast Trigger
function sendMassBroadcast() {
    const target = document.getElementById('broadcastTarget').value;
    const msg = document.getElementById('broadcastMsg').value;
    
    // Update Ticker
    const tickerContent = document.querySelector('.broadcast-ticker marquee');
    if (tickerContent) {
        tickerContent.innerHTML = `🚨 URGENT BROADCAST TO [${target}]: ${msg}`;
    }

    if (!state.sirenActive) {
        toggleAudioSiren();
    }
    
    alert(`📢 BROADCAST SENT SUCCESSFULLY:\nMessage sent to all citizen mobile devices in ${target} flood zone.`);
}
