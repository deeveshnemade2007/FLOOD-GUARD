// ==========================================================================
// SHORTEST & FASTEST EVACUATION ROUTE CALCULATOR
// ==========================================================================
function calculateEvacuationRoute() {
    const originKey = document.getElementById('originArea').value;
    const destKey = document.getElementById('destShelter').value;
    
    const lookupKey = `${originKey}-${destKey}`;
    const profile = ROUTE_PROFILES[lookupKey] || {
        dist: "2.8 km",
        time: "7 mins",
        traffic: "Minimal (Green)",
        sub: "0",
        inst: "🚗 Proceed via designated arterial high-ground road. Avoid low causeways."
    };

    document.getElementById('routeDist').textContent = profile.dist;
    document.getElementById('routeTime').textContent = profile.time;
    document.getElementById('routeTraffic').innerHTML = `<i class="fa-solid fa-circle-check"></i> ${profile.traffic}`;
    document.getElementById('routeSubmerged').textContent = `${profile.sub} Causeways`;
    document.getElementById('routeInstructions').textContent = profile.inst;

    // Draw Polyline on Leaflet Map
    if (state.map && PUNE_LOCATIONS[originKey] && PUNE_LOCATIONS[destKey]) {
        if (state.activeRoutePolyline) {
            state.map.removeLayer(state.activeRoutePolyline);
        }

        const startCoords = PUNE_LOCATIONS[originKey].coords;
        const endCoords = PUNE_LOCATIONS[destKey].coords;

        state.activeRoutePolyline = L.polyline([startCoords, endCoords], {
            color: '#00f0ff',
            weight: 5,
            opacity: 0.9,
            dashArray: '8, 8'
        }).addTo(state.map);

        state.map.fitBounds(state.activeRoutePolyline.getBounds(), { padding: [40, 40] });
    }
}

// ==========================================================================