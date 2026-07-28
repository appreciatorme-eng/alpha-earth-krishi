# Alpha Earth Krishi Constitution

## Core Principles

### I. Real Open-Data Supremacy (NON-NEGOTIABLE)
All environmental, atmospheric, geospatial, and market data displayed to farmers must originate from verifiable, live public API endpoints (e.g., Open-Meteo Climate Archive, OpenStreetMap Nominatim, Agmarknet Mandi Data, Sentinel/Copernicus tile endpoints). Fake, static, or placeholder arrays are strictly forbidden in production builds.

### II. Spec-Driven Development (SDD) First
Every feature must follow the GitHub Spec Kit lifecycle (`/speckit.specify` → `/speckit.plan` → `/speckit.tasks` → `/speckit.implement`). Specifications and technical blueprints are the primary source of truth before implementation.

### III. Data Privacy & DPDP Compliance
Farmer identity and land parcel queries must respect India's Digital Personal Data Protection (DPDP) Act 2023. Unauthenticated public search by personal name is prohibited without Aadhaar/Mobile OTP authorization. Coordinate and spatial queries must be anonymized.

### IV. Resilience & Graceful Fallbacks
If an external API (such as Agmarknet or Open-Meteo) experiences rate limits or timeouts, the client application must display informative degraded-state notifications and cached seasonal baseline estimates rather than crashing or throwing silent console errors.

### V. Mobile-First & Low-Bandwidth Optimization
Agricultural users in India often operate under 3G/4G rural network constraints. All map tiles, API fetch payloads, and dynamic charts must be lightweight, cached locally, and optimized for sub-second renders.

## Governance
This constitution supersedes all ad-hoc feature implementations. Amendments to API contracts or data pipelines must be documented in Spec Kit feature specs.

**Version**: 1.0.0 | **Ratified**: 2026-07-28 | **Last Amended**: 2026-07-28
