// ==========================================================================
// PUNE LEAFLET MAP INITIALIZATION
// ==========================================================================
function initLeafletMap() {
    // Centered on Pune City Mutha River Basin
    state.map = L.map('puneMap', {
        center: [18.5150, 73.8450],
        zoom: 13,
        zoomControl: true
    });

    // Dark Tile Layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(state.map);

    // 1. Draw Translucent Flood Danger Zones (Red Polygons along Mutha River)
    const floodZoneCoords = [
        [18.4750, 73.8200],
        [18.4880, 73.8320], // Sinhagad Rd
        [18.5120, 73.8380], // Pulachi Wadi
        [18.5220, 73.8480], // Deccan / Alka
        [18.5350, 73.8650], // Shivajinagar Court
        [18.5420, 73.8780], // Sangamwadi
        [18.5400, 73.8950],
        [18.5280, 73.8750],
        [18.5150, 73.8550],
        [18.4900, 73.8420]
    ];

    L.polygon(floodZoneCoords, {
        color: '#ff2a5f',
        fillColor: '#ff2a5f',
        fillOpacity: 0.35,
        weight: 2,
        dashArray: '5, 5'
    }).addTo(state.map).bindPopup(`
        <div style="font-family: sans-serif;">
            <strong style="color: #ff2a5f;">🚨 SUBMERGED DANGER ZONE</strong><br>
            <strong>Location:</strong> Mutha Riverbank Belt (Sinhagad Rd - Deccan)<br>
            <strong>Water Depth:</strong> 4 - 8 Feet Overflow<br>
            <span style="color: #ff9f1c; font-size: 11px;">MANDATORY EVACUATION IN EFFECT</span>
        </div>
    `);

    // 2. Add Khadakwasla Dam Node Marker
    L.circleMarker([18.4410, 73.7620], {
        radius: 12,
        color: '#ff2a5f',
        fillColor: '#ff2a5f',
        fillOpacity: 0.8
    }).addTo(state.map).bindPopup(`
        <strong>🌊 KHADAKWASLA DAM SPILLWAY</strong><br>
        Release Rate: <strong>98,500 Cusecs</strong><br>
        Reservoir Level: 104.5% Capacity<br>
        Status: <span style="color:#ff2a5f; font-weight:bold;">ALL GATES OPEN</span>
    `);

    // 3. Add Safe Shelter Markers (Green Shields)
    Object.keys(PUNE_LOCATIONS).forEach(key => {
        if (['arai', 'parvati', 'punegov', 'empress'].includes(key)) {
            const shelter = PUNE_LOCATIONS[key];
            L.circleMarker(shelter.coords, {
                radius: 9,
                color: '#10b981',
                fillColor: '#10b981',
                fillOpacity: 0.9
            }).addTo(state.map).bindPopup(`
                <strong style="color: #10b981;">⛺ ELEVATED SAFE SHELTER</strong><br>
                <strong>${shelter.name}</strong><br>
                Facilities: Medical Tents, Food, Clean Water, NDRF Base Camp
            `);
        }
    });

    // 4. Render Initial Citizen SOS Markers
    renderMapSosMarkers();
}

function renderMapSosMarkers() {
    if (!state.map) return;
    
    state.citizenReports.forEach(report => {
        L.circleMarker(report.coords, {
            radius: 8,
            color: report.status === 'DISPATCHED' ? '#10b981' : '#ff2a5f',
            fillColor: report.status === 'DISPATCHED' ? '#10b981' : '#ff2a5f',
            fillOpacity: 0.9
        }).addTo(state.map).bindPopup(`
            <strong style="color: ${report.status === 'DISPATCHED' ? '#10b981' : '#ff2a5f'};">
                ${report.status === 'DISPATCHED' ? '✅ RESCUE TEAM DISPATCHED' : '🚨 CITIZEN SOS HELP NEEDED'}
            </strong><br>
            <strong>ID:</strong> ${report.id}<br>
            <strong>Citizen:</strong> ${report.name} (${report.phone})<br>
            <strong>Area:</strong> ${report.area}<br>
            <strong>Need:</strong> ${report.category}
        `);
    });
}
