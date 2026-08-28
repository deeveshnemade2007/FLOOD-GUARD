// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initLeafletMap();
    renderIncidentList();
    calculateEvacuationRoute();
    updateCctvTime();
    setInterval(updateCctvTime, 1000);
});
