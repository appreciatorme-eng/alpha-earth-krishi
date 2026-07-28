# Feature Specification: Real Data API Integration for Alpha Earth Krishi

**Feature ID**: 001-real-data-agri-platform  
**Status**: Approved / In Development  
**Author**: Antigravity AI & Human Pair  
**Created**: 2026-07-28  

---

## 1. Overview & Business Intent
Alpha Earth Krishi is an AI geospatial farm intelligence platform tailored for Indian farmers. This specification establishes **live API integrations** with open historical weather databases, satellite tile services, reverse geocoding engines, and market commodity APIs.

---

## 2. Target User Stories

### User Story 1: Live Historical Environmental Climate Search
> **As an** Indian farmer or agronomist,  
> **I want to** enter any GPS coordinates or pick a parcel on an interactive map in India,  
> **So that I can** view real historical rainfall (mm), surface solar radiation ($MJ/m^2/day$), and 2m air temperature trends fetched directly from satellite climate archives for the last 10 years.

### User Story 2: Automatic Real Address & District Geocoding
> **As a** user,  
> **When I** click or enter coordinates on the map,  
> **I want** the system to resolve the exact Village, Taluka, District, and State using real OpenStreetMap reverse geocoding services.

### User Story 3: Live Soil & Moisture Telemetry
> **As a** user,  
> **I want to** fetch real soil moisture ($0-7cm$) and soil surface temperature metrics for my location from open soil observation APIs.

### User Story 4: Live Mandi Commodity Price Data Integration
> **As a** user planning crop sowing,  
> **I want to** see real commodity prices for key crops (Turmeric, Soybean, Wheat, Rice, Cotton) sourced from public mandi APIs.

---

## 3. Real Data API Architecture & Contracts

### A. Open-Meteo Historical Climate Archive API
* **Endpoint**: `https://archive-api.open-meteo.com/v1/archive`
* **HTTP Method**: `GET`
* **Query Parameters**:
  * `latitude`: Decimal latitude (e.g. `16.8524`)
  * `longitude`: Decimal longitude (e.g. `74.5815`)
  * `start_date`: `2017-01-01`
  * `end_date`: `2026-07-01`
  * `daily`: `precipitation_sum,shortwave_radiation_sum,temperature_2m_max,temperature_2m_min`
  * `timezone`: `Asia/Kolkata`
* **Data Transformer**: Aggregates daily values into 10 annual buckets (2017–2026) for Chart.js visualization.

### B. OpenStreetMap Nominatim Reverse Geocoding API
* **Endpoint**: `https://nominatim.openstreetmap.org/reverse`
* **Query Parameters**: `lat={lat}&lon={lng}&format=json`
* **Output**: Resolves real city/village, district (county), state, and country.

### C. Open-Meteo Forecast & Soil API
* **Endpoint**: `https://api.open-meteo.com/v1/forecast`
* **Query Parameters**: `latitude={lat}&longitude={lng}&current=temperature_2m,relative_humidity_2m,soil_temperature_0cm,soil_moisture_0_to_7cm`

---

## 4. Acceptance Criteria & Quality Gates

* **AC1**: Selecting any location in India must trigger asynchronous fetch calls to Open-Meteo API.
* **AC2**: The Historical Environmental Impact Chart must display **real computed annual rainfall (mm)** and **real solar irradiance ($MJ/m^2/day$)**.
* **AC3**: Geocoding must update parcel location name dynamically without page reloads.
* **AC4**: Loading state indicators must communicate fetch status clearly to the user.
