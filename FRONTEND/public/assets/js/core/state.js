/* ==========================================================================
   PUNE CRISIS NET // FULL INTERACTIVE PLATFORM ENGINE (APP.JS)
   ========================================================================== */

// Global State Store
let state = {
    currentView: 'citizen',
    riskPercent: 92.4,
    dischargeCusecs: 98500,
    waterLevelMeters: 18.2,
    rainfallMmHr: 68.5,
    sirenActive: false,
    audioCtx: null,
    sirenOscillator: null,
    sirenGain: null,
    map: null,
    activeRoutePolyline: null,
    citizenReports: [
        {
            id: 'PNE-SOS-9840',
            name: 'Anand Deshmukh',
            phone: '9822091823',
            area: 'Sinhagad Road (Vitthalwadi)',
            depth: '6+ Feet (CRITICAL)',
            category: 'Stranded on Roof / Upper Floor',
            description: 'Water reached 1st floor. 5 people trapped on terrace.',
            time: '18:12 IST',
            status: 'PENDING_RESCUE',
            coords: [18.4830, 73.8290]
        },
        {
            id: 'PNE-SOS-9838',
            name: 'Priya Joshi',
            phone: '9765412390',
            area: 'Deccan Gymkhana / Pulachi Wadi',
            depth: '3-5 Feet (Severe)',
            category: 'Elderly / Medical Emergency',
            description: 'Diabetic patient needs evacuation to high ground.',
            time: '18:05 IST',
            status: 'DISPATCHED',
            assignedUnit: 'NDRF Battalion 5 (Team Beta)',
            coords: [18.5160, 73.8400]
        },
        {
            id: 'PNE-SOS-9835',
            name: 'Sunil Shinde',
            phone: '9423189012',
            area: 'Sangamwadi',
            depth: '3-5 Feet (Severe)',
            category: 'Trapped in Submerged Vehicle',
            description: 'Car stalled in underpass water accumulation.',
            time: '17:54 IST',
            status: 'DISPATCHED',
            assignedUnit: 'Pune Fire Brigade Unit 3',
            coords: [18.5390, 73.8710]
        }
    ]
};
