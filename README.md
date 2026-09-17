# 🌊 FLOOD GUARD

### AI-Based Flood Prediction, Real-Time Monitoring & Emergency Rescue Platform

FLOOD GUARD is an **AI-powered flood prediction and emergency management platform** designed to predict flood risk, monitor water levels and rainfall, provide real-time alerts, and coordinate evacuation and rescue operations.

The system combines **AI/ML, real-time monitoring, maps, traffic information, live cameras, and emergency communication** to help citizens and government authorities respond quickly during flood situations.

---

## 🚨 Problem Statement

Floods can cause significant damage to:

* Human lives and property
* Roads and transportation
* Electricity and communication infrastructure
* Schools, hospitals, and other public facilities
* Emergency response operations

Traditional flood-warning systems may not provide enough localized information or effective coordination between citizens and authorities.

**FLOOD GUARD** aims to provide a centralized platform for **early prediction, real-time monitoring, emergency alerts, safe evacuation, and rescue coordination.**

---

## 🎯 Objectives

* Predict flood risk using AI/ML.
* Monitor rainfall and water levels in real time.
* Identify and display danger zones.
* Send alerts when critical conditions are detected.
* Provide citizens with safe evacuation routes.
* Allow citizens to request emergency assistance.
* Help authorities monitor and coordinate rescue operations.
* Provide live area-camera monitoring.
* Reduce emergency response time.

---

# ✨ Key Features

### 🤖 1. AI-Based Flood Prediction

The system analyzes factors such as:

* Rainfall
* Water level
* Weather conditions
* Historical flood data
* Location-based information

It generates a **flood-risk percentage from 0–100%**.

Example:

```text
Location: Pune
Rainfall: 92 mm
Water Level: 4.8 m
Flood Risk: 78%
Status: HIGH
```

### 🌧️ 2. Real-Time Monitoring

The platform can monitor:

* Water levels
* Rainfall
* Flood-prone locations
* Road conditions
* Traffic conditions
* Live camera feeds

---

### ⚠️ 3. Flood Risk Classification

| Risk Percentage | Status   |
| --------------: | -------- |
|           0–20% | SAFE     |
|          21–40% | LOW      |
|          41–60% | MODERATE |
|          61–80% | HIGH     |
|         81–100% | CRITICAL |

This provides an easy-to-understand indication of the current flood situation.

---

### 💧 4. Water-Level Monitoring

The system uses water-level thresholds to identify dangerous conditions.

| Water Level | Condition |
| ----------: | --------- |
|     < 2.0 m | Safe      |
|   2.0–3.0 m | Warning   |
|   3.0–4.0 m | Danger    |
|     > 4.0 m | Critical  |

When water levels reach dangerous conditions, the system can trigger emergency alerts.

---

# 👤 Citizen Portal

Citizens can use the platform to:

### 🆘 Request Help

A citizen can submit an emergency help request.

The request is displayed in the **Government Control Room** so authorities can coordinate a rescue response.

### 🗺️ Find Safe Route

The system provides evacuation routes based on:

* Flood risk
* Road closures
* Traffic
* Distance
* Safety

The objective is to identify a route that balances **shortest distance, travel time, and safety**.

### 🏠 Find Nearest Shelter

Citizens can find nearby shelters along with information such as:

* Distance
* Risk level
* Capacity
* Accessibility

### 📹 Live Area Camera

Citizens can view available camera feeds to understand the situation in their area.

### 🔔 Emergency Alerts

Citizens receive notifications about:

* Rising water levels
* High flood risk
* Dangerous areas
* Road closures
* Evacuation requirements
* Emergency situations

---

# 🏛️ Government Control Room

The government-side dashboard provides centralized monitoring and emergency coordination.

### Features

* 📊 Flood-risk monitoring
* 🗺️ Live map
* 📍 Danger-zone identification
* 🆘 Citizen help requests
* 🚑 Rescue-team coordination
* 📹 Live camera monitoring
* 🚧 Road-closure monitoring
* 🔔 Emergency alerts
* 🏠 Shelter monitoring
* ⚙️ Manual emergency override

### Emergency Workflow

```text
Citizen Requests Help
        ↓
Request Appears in Control Room
        ↓
Authority Reviews Location
        ↓
Nearest Rescue Team Identified
        ↓
Rescue Team Dispatched
        ↓
Citizen Receives Assistance
```

---

# 🗺️ Intelligent Evacuation System

The evacuation module considers:

```text
Flood Risk
    +
Water Level
    +
Traffic
    +
Road Closures
    +
Distance
    ↓
Safe Route Calculation
    ↓
Recommended Evacuation Route
```

The system can dynamically adjust routes when roads become unsafe or flooded.

---

# 🏗️ System Architecture

```text
              DATA SOURCES
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
     Rainfall   Water Level   Cameras
        │          │          │
        └──────────┼──────────┘
                   ↓
             BACKEND SERVER
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
   AI/ML Prediction       Emergency APIs
        │                     │
        └──────────┬──────────┘
                   ↓
             FLOOD GUARD
              PLATFORM
                   │
          ┌────────┴────────┐
          ↓                 ↓
      CITIZEN UI      GOVERNMENT UI
          │                 │
          ↓                 ↓
     Alerts/Routes      Monitoring/
     Help Requests      Rescue
```

---

# 💻 Technology Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript
* Leaflet / OpenStreetMap
* Responsive UI

### Backend

* Node.js
* Express.js
* REST APIs

### AI/ML

* Python
* Machine Learning models
* Historical flood data
* Rainfall and water-level analysis

### Communication

* HTTP APIs
* Real-time notifications
* Emergency alerts

### Database / Data

The platform can use structured storage for:

* Flood predictions
* Sensor readings
* Citizen requests
* Rescue teams
* Shelters
* Alerts
* Location information

---

# 🔌 Backend API Structure

Example API modules:

```text
/api/flood/prediction
/api/water-level
/api/alerts
/api/evacuation-route
/api/hazards
/api/citizen-help
/api/emergency
```

These APIs connect the frontend interfaces with the backend services.

---

# 📍 Current Prototype

The current prototype focuses on **Pune** as the demonstration area.

It provides a map-based simulation of flood conditions and demonstrates how the platform can be expanded to additional cities and regions.

---

# 🔄 Overall Working

```text
1. Collect Data
       ↓
2. Analyze Rainfall & Water Levels
       ↓
3. AI Predicts Flood Risk
       ↓
4. Identify Danger Zones
       ↓
5. Generate Alerts
       ↓
6. Citizens Receive Warnings
       ↓
7. Safe Evacuation Routes Generated
       ↓
8. Citizen Requests Help if Required
       ↓
9. Government Control Room Receives Request
       ↓
10. Rescue Team Dispatched
       ↓
11. Situation Monitored in Real Time
```

---

# 🌱 Future Scope

* IoT-based water-level sensors
* More advanced ML prediction models
* Weather API integration
* Real-time traffic integration
* Computer vision for flood detection
* Automated road-closure detection
* SMS and WhatsApp emergency alerts
* GPS-based rescue-team tracking
* Integration with emergency services
* Expansion from Pune to other flood-prone cities
* Cloud deployment and large-scale monitoring

---

# 🌍 Impact

FLOOD GUARD aims to create a unified system connecting:

**Citizens + AI + Real-Time Data + Government Authorities + Rescue Teams**

By providing early warnings, localized flood-risk information, evacuation assistance, and emergency coordination, the platform is designed to support faster and more organized flood response.

---

## 👥 Team — Team Glitch

**FLOOD GUARD**
AI-Powered Flood Prediction, Real-Time Monitoring & Emergency Rescue Platform

**Domain:** Sustainability & Climate Technology

---

## 📜 License

This project is developed as an academic/hackathon prototype for demonstrating AI-based flood prediction, monitoring, evacuation, and emergency-response concepts.
