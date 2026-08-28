// Pune Key Geographical Coordinates
const PUNE_LOCATIONS = {
    sinhagad: { name: "Sinhagad Road Vitthalwadi", coords: [18.4850, 73.8320] },
    deccan: { name: "Deccan Gymkhana Causeway", coords: [18.5170, 73.8420] },
    sangamwadi: { name: "Sangamwadi Confluence", coords: [18.5380, 73.8720] },
    kalyaninagar: { name: "Kalyani Nagar Bank", coords: [18.5480, 73.9020] },
    hadapsar: { name: "Hadapsar Mundhwa Bridge", coords: [18.5200, 73.9250] },
    
    // Elevated Safe Shelters
    arai: { name: "ARAI Hill Emergency Shelter (650m)", coords: [18.5140, 73.8180] },
    parvati: { name: "Parvati Hill High Camp (640m)", coords: [18.4975, 73.8475] },
    punegov: { name: "Pune University High Base", coords: [18.5525, 73.8260] },
    empress: { name: "Empress Garden Camp", coords: [18.5120, 73.8900] }
};

// Evacuation Route Profiles (Shortest & Traffic-Aware)
const ROUTE_PROFILES = {
    "sinhagad-arai": { dist: "3.1 km", time: "7 mins", traffic: "Minimal (Green)", sub: "0", inst: "🚗 Take Rajaram Bridge bypass ➔ Karve Nagar inner road ➔ ARAI Hill Base Camp. Avoid Sinhagad Rd main canal." },
    "sinhagad-parvati": { dist: "1.8 km", time: "4 mins", traffic: "Moderate", sub: "0", inst: "🚗 Drive up Parvati Paytha incline directly to Top Temple Shelter. Completely safe from Mutha overflow." },
    "deccan-arai": { dist: "2.4 km", time: "6 mins", traffic: "Minimal (Green)", sub: "0", inst: "🚗 Take Karve Road ➔ Law College Road ➔ Paud Road bypass to ARAI Hill. Avoid Alka Talkies causeway." },
    "deccan-punegov": { dist: "3.5 km", time: "8 mins", traffic: "Clear", sub: "0", inst: "🚗 Proceed via FC Road ➔ Shivajinagar Flyover ➔ Ganeshkhind Rd straight into Pune University Campus." },
    "sangamwadi-punegov": { dist: "4.2 km", time: "10 mins", traffic: "Clear", sub: "0", inst: "🚗 Take Bund Garden Rd ➔ Sancheti Flyover ➔ Ganeshkhind Road directly to University Safe Camp." },
    "sangamwadi-empress": { dist: "2.8 km", time: "6 mins", traffic: "Minimal", sub: "0", inst: "🚗 Proceed via Pune Station ➔ Sadhu Vaswani Bridge ➔ Empress Garden High Base." },
    "kalyaninagar-empress": { dist: "4.0 km", time: "9 mins", traffic: "Clear", sub: "0", inst: "🚗 Drive via Koregaon Park North Main Rd ➔ Empress Garden Elevated Grounds." },
    "hadapsar-empress": { dist: "3.2 km", time: "7 mins", traffic: "Clear", sub: "0", inst: "🚗 Take Solapur Road highway ➔ Empress Garden Ramp. Free of water accumulation." }
};
