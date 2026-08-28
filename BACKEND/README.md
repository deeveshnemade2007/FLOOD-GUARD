# 🌊 FloodSafe Pune - Smart Monsoon Flood Detection and Automatic Road Closure
**Theme**: Smart Technology & Innovation | **Event**: AI4SDG Global Hackathon 2026  
**Team**: Backend (Sanket) | Frontend (Deevesh) | Machine Learning & CV (Tanmay)

---

## 📌 Problem Overview
Low-lying roads and underpasses across Pune (such as Sancheti Underpass, Baba Bhide Bridge, Sinhagad Road, and Pune Station Underpass) become submerged within minutes during heavy monsoon rainfall, trapping vehicles before authorities can manually react.

**FloodSafe** provides an automated decision-and-control platform combining rainfall intensity, drain flow rates, pump telemetry, upstream dam discharge (Khadakwasla/Mutha), CCTV computer vision water levels, and traffic flow. It predicts **Time-to-Danger (TTD)**, automatically actuates **smart barrier locks & dynamic VMS digital warning signs**, dispatches **WhatsApp driver alerts within a 1km geofence**, and calculates **dynamic safe detour routes**.

---

## 🚀 Quick Start

### 1. Install & Run Server
```bash
npm install
npm start
# Or for live auto-reload during development:
npm run dev
```

The server starts at: `http://localhost:5000`

### 2. Interactive Web API Explorer & Testbench
Visit in your browser:  
👉 **`http://localhost:5000/docs`**

Allows one-click testing of all endpoints and live simulation scenario buttons for presentations!

### 3. Run Automated Backend Tests
```bash
npm test
```

---

## ⚡ Core API Endpoints

| Category | Method | Endpoint | Description |
| :--- | :---: | :--- | :--- |
| **System** | `GET` | `/health` or `/api/v1/health` | Service healthcheck & metadata |
| **Weather** | `GET` | `/api/v1/weather` | Live Open-Meteo Pune weather sync |
| **Roads & GIS** | `GET` | `/api/v1/roads` | All Pune flood hotspots, depths & risk scores |
| **GIS Map Feed** | `GET` | `/api/v1/roads/geojson` | Standard GeoJSON for Leaflet / Mapbox / Folium |
| **Telemetry** | `POST` | `/api/v1/telemetry/ingest` | Ingest sensor data (triggers auto-barrier closure) |
| **Telemetry** | `GET` | `/api/v1/telemetry/live` | Pune-wide sensor snapshot (Drains, Pumps, Dam) |
| **Actuation** | `GET` | `/api/v1/barriers` | Barrier actuator states & VMS display messages |
| **Authority** | `POST` | `/api/v1/barriers/:id/override` | PMC / Police manual lock/open override with PIN |
| **Authority** | `POST` | `/api/v1/barriers/:id/reset` | Restore automatic sensor control |
| **Safe Rerouting** | `GET` | `/api/v1/navigation/safe-route` | Dynamic Dijkstra routing avoiding flooded roads |
| **Driver Alerts** | `POST` | `/api/v1/drivers/track-and-alert` | Geofence scanner & WhatsApp alert dispatcher |
| **ML Bridge** | `POST` | `/api/v1/ml/water-forecast` | Hook for Tanmay's Python water depth & TTD model |
| **CV Bridge** | `POST` | `/api/v1/ml/cctv-gauge` | Hook for Tanmay's CCTV gauge reader |
| **Citizen Reports**| `POST` | `/api/v1/flood-reports` | Crowdsourced citizen incident reporting |
| **Shelters** | `GET` | `/api/v1/shelters` | Emergency relief evacuation centers |
| **Dashboard** | `GET` | `/api/v1/authority/dashboard-summary` | High-level control room KPIs |
| **Simulator** | `POST` | `/api/v1/simulation/trigger-scenario` | Live demo scenario triggers |

---

## 🎬 Live Presentation Scenarios
During your hackathon presentation, trigger instant disaster and recovery scenarios to demonstrate real-time automation:

- `HEAVY_CLOUDBURST`: 85mm/h rain in Shivajinagar; Sancheti underpass submerges (48cm); barriers lock down and VMS warning boards activate.
- `KHADAKWASLA_DISCHARGE`: 32,000 cusecs released into Mutha river; Baba Bhide bridge closes; traffic diverted via JM Road.
- `PUMP_FAILURE`: Sancheti pump trips; triggers pre-emptive barrier closure based on Time-to-Danger.
- `ALL_CLEAR`: Drains empty water; barriers automatically retract to OPEN state.

---

## 👥 Team Integration Files
- **For Tanmay (ML/CV)**: `integrations/tanmay_ml_client.py` (Python test script with zero external dependencies).
- **For Deevesh (Frontend)**: `integrations/deevesh_frontend_guide.md` (Payload specs + complete Streamlit sample).
