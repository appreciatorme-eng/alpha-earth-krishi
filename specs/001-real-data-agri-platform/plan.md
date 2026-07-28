# Implementation Plan: Real Data API Integrations

**Feature ID**: 001-real-data-agri-platform  
**Spec Document**: [spec.md](file:///Users/justforfun/Desktop/Alpha%20Earth/specs/001-real-data-agri-platform/spec.md)  
**Status**: Approved  

---

## 1. Technical Strategy & Data Flow

```
[ User Input / Map Marker ]
           │
           ▼
 [ app.js Fetch Orchestrator ]
    ├──► 1. Fetch Nominatim Reverse Geocode (Address/District)
    ├──► 2. Fetch Open-Meteo Historical Archive (Rainfall/Sunlight 2017-2026)
    └──► 3. Fetch Open-Meteo Current Telemetry (Soil Moisture & Temperature)
           │
           ▼
 [ Chart.js Data Transformer ] ──► Update UI Cards & Canvas Graphics
```

---

## 2. Component Modification Plan

### `app.js`
* Implement `fetchRealClimateData(lat, lng)` using Open-Meteo Archive REST API.
* Implement `fetchReverseGeocode(lat, lng)` using Nominatim API.
* Implement `fetchRealSoilTelemetry(lat, lng)` using Open-Meteo Forecast API.
* Add async loading spinners and error handling with UI notifications.
* Wire Leaflet click events to fetch real data dynamically for any clicked point in India.

### `index.html`
* Add real API telemetry indicators (Real API Connected badge, live lat/lng readout).
* Add live soil telemetry section ($0-7cm$ soil moisture, ground temperature).

---

## 3. Verification Plan

* Test location 1: Sangli, Maharashtra (`16.8524, 74.5815`)
* Test location 2: Ludhiana, Punjab (`30.9010, 75.8573`)
* Test location 3: Mysuru, Karnataka (`12.2958, 76.6394`)
* Verify real network HTTP calls in browser / log output.
