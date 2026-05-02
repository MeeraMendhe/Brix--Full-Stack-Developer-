# 🔧 Brix Field — Service Scheduling & Notification System

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)
![Parcel](https://img.shields.io/badge/Parcel-2-B93700?style=for-the-badge&logo=parcel&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black)

**A full-stack field service scheduling system** — managers assign jobs to technicians, technicians complete them, both sides receive live notifications.

[🌐 Live Demo](https://brix-frontend-six.vercel.app) &nbsp;·&nbsp; [⚙️ API](https://brix-full-stack-developer-backend-vsf9.onrender.com/api/quotes) &nbsp;·&nbsp; [📖 API Docs](#-api-reference)

</div>

---

## ✨ Features

| Role | Capabilities |
|---|---|
| 👔 **Manager** | View unscheduled quotes · Assign to technician with date & time slot · Monitor all jobs · Receive completion notifications |
| 🔧 **Technician** | View personal schedule · Mark jobs complete · Receive assignment notifications |

---

## 🚀 Live Deployment

| Service | URL |
|---|---|
| 🌐 **Frontend** | https://brix-frontend-six.vercel.app |
| ⚙️ **Backend API** | https://brix-full-stack-developer-backend-vsf9.onrender.com/api |

> ⚠️ **Cold start notice:** The backend runs on Render's free tier. The first request after inactivity may take **30–60 seconds** to wake up. Subsequent requests are fast.

---

## 🛠 Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Frontend** | React 18 + Parcel | Zero-config bundler — no `vite.config.js`, no plugin setup |
| **State / Data** | TanStack Query v5 | Polling, caching, and cache invalidation with minimal code |
| **Backend** | Node.js + Express (ESM) | Lightweight REST API, clean separation of concerns |
| **Storage** | In-memory JS arrays | Zero setup for take-home scope — see [Trade-offs](#%EF%B8%8F-trade-offs--production-path) |
| **Styling** | Plain CSS + custom properties | Full design system in one file, Parcel handles imports natively |
| **Dates** | date-fns | Lightweight, tree-shakeable |
| **Deployment** | Vercel + Render | Free tier, zero-config CI/CD |

---

## 📁 Project Structure

```
brix-scheduling/
│
├── 📂 backend/
│   └── src/
│       ├── index.js       # Express server — middleware, routing, error handler
│       ├── routes.js      # All REST endpoints
│       ├── db.js          # In-memory store + business logic (createJob, completeJob)
│       └── seed.js        # 3 managers · 5 technicians · 22 quotes
│
└── 📂 frontend/
    ├── index.html         # Parcel entry point
    ├── index.js       # React DOM mount
    ├── App.jsx        # Sidebar nav · page routing · QueryClientProvider
    ├── index.css      # Design system — CSS custom properties, layout, components
    └── src/
        ├── api/
        │   └── client.js  # fetch wrapper — all API calls live here
        ├── components/
            ├── Dashboard.jsx          # Stats cards + technician workload overview
            ├── QuotesPage.jsx         # Filter + list quotes, open assign modal
            ├── JobsPage.jsx           # All jobs across all technicians
            ├── TechnicianPage.jsx     # Personal schedule + complete button + notifications
            ├── NotificationsPage.jsx  # System-wide notification feed, mark read
            └── AssignModal.jsx        # Pick technician · date · 2-hr time slot
```

---

## ⚡ Local Setup

### Prerequisites

- Node.js `18+`
- npm `9+`

### 1. Clone

```bash
git clone https://github.com/MeeraMendhe/brix-scheduling.git
cd brix-scheduling
```

### 2. Backend

```bash
cd backend
npm install
npm run start
```

```
✅  Brix Scheduling API running on http://localhost:3001
```

### 3. Frontend

```bash
cd frontend
npm install
npm run start
```

```
Server running at http://localhost:1234
```

Open **http://localhost:1234** in your browser.

> By default the frontend points to the **deployed Render backend**.  
> To use your local backend, update line 1 of `frontend/src/api/client.js`:
>
> ```js
> // Change this:
> const BASE = 'https://brix-full-stack-developer-backend-vsf9.onrender.com/api';
>
> // To this:
> const BASE = 'http://localhost:3001/api';
> ```

---

### Frontend `package.json` — Parcel setup

```json
{
  "name": "brix-scheduling-frontend",
  "source": "index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.0.0",
    "date-fns": "^3.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}
```

> `"source": "index.html"` is the only config Parcel needs — it auto-detects React JSX, CSS imports, and ESM modules.

---

## 📡 API Reference

**Base URL:** `https://brix-full-stack-developer-backend-vsf9.onrender.com/api`

### Managers & Technicians

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/managers` | List all managers |
| `GET` | `/technicians` | List all technicians |
| `GET` | `/technicians/:id/jobs` | A technician's jobs, sorted by start time |

### Quotes

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/quotes` | All quotes |
| `GET` | `/quotes?status=unscheduled` | Filter by status (`unscheduled` \| `scheduled`) |

### Jobs

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/jobs` | All jobs enriched with quote, technician, manager |
| `GET` | `/jobs?technicianId=t1&status=scheduled` | Filter by any param combination |
| `POST` | `/jobs` | Create a job — assigns quote, triggers technician notification |
| `PATCH` | `/jobs/:id/complete` | Mark job complete — triggers manager notification |

#### `POST /jobs` — Request Body

```json
{
  "quoteId": "q01",
  "technicianId": "t1",
  "managerId": "m1",
  "startTime": "2026-05-02T09:00:00.000Z"
}
```

### Notifications

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/notifications` | All notifications |
| `GET` | `/notifications?recipientType=technician&recipientId=t1` | Filter by recipient |
| `PATCH` | `/notifications/:id/read` | Mark a notification as read |

### HTTP Error Codes

| Code | Meaning |
|---|---|
| `400` | Missing required fields |
| `404` | Quote or job not found |
| `409` | Scheduling conflict or quote already assigned |
| `500` | Internal server error |

---

## 🔒 Conflict Prevention

Scheduling conflicts are **enforced on the backend** — the frontend cannot bypass this.

```js
// db.js → createJob()
const conflict = db.jobs.find(j =>
  j.technicianId === technicianId &&
  j.status !== 'cancelled' &&
  new Date(j.startTime) < end &&   // open-interval overlap check
  new Date(j.endTime)   > start    // startA < endB && endA > startB
);

if (conflict) {
  const err = new Error(
    `Technician already has a job from ${fmtTime(conflict.startTime)} to ${fmtTime(conflict.endTime)}.`
  );
  err.code = 'CONFLICT';
  throw err;
}
```

Returns **HTTP 409** with a human-readable message. The assign modal surfaces this error inline.

---

## 🔔 Notification Flow

```
Manager assigns job
        │
        ▼
  createJob() fires
        │
        ├──► JOB_ASSIGNED  ──► Technician's notification panel
        │
Technician marks complete
        │
        ▼
  completeJob() fires
        │
        └──► JOB_COMPLETED ──► Manager's notification panel
```

Notifications are stored in `db.notifications` and polled every **4 seconds** via TanStack Query `refetchInterval`. The sidebar badge updates live.

> **Production path:** Replace polling with **Server-Sent Events** — one `/api/notifications/stream?recipientId=` endpoint per user, push events on job state changes.

---

## ♻️ Job Lifecycle

```
┌─────────────────────┐
│  Unscheduled Quote  │
└────────┬────────────┘
         │  POST /api/jobs
         ▼
┌─────────────────────┐
│   Job: scheduled    │  ← Technician notified (JOB_ASSIGNED)
└────────┬────────────┘
         │  PATCH /api/jobs/:id/complete
         ▼
┌─────────────────────┐
│   Job: completed    │  ← Manager notified (JOB_COMPLETED)
└─────────────────────┘
```

---

## 🌱 Seed Data

All seed data lives in `backend/src/seed.js` and is imported into `db.js` at startup.

| Entity | Count | Names |
|---|---|---|
| Managers | 3 | Jordan Hale, Priya Sethi, Marcus Webb |
| Technicians | 5 | Sam Torres, Riley Cooper, Devon Nash, Morgan Blaine, Casey Quinn |
| Quotes | 22 | Across HVAC, electrical, plumbing, gas, solar, security, compliance |

<details>
<summary>📋 View all 22 quotes</summary>
<br>

| ID | Title |
|---|---|
| q01 | Ducted AC Installation – Level 3 |
| q02 | Hot Water System Replacement |
| q03 | Switchboard Upgrade – 3 Phase |
| q04 | Gas Line Inspection & Certification |
| q05 | Roof Gutter Repair & Resealing |
| q06 | Split System Installation – Bedroom |
| q07 | Underground Water Pipe Repair |
| q08 | Smoke Alarm Compliance Check |
| q09 | External Cladding Inspection |
| q10 | Solar Inverter Fault Diagnosis |
| q11 | Bathroom Exhaust Fan Replacement |
| q12 | Stormwater Drain Unblocking |
| q13 | EV Charger Rough-In & Install |
| q14 | Ceiling Fan Install – Living Room |
| q15 | Leak Detection – Kitchen Slab |
| q16 | Pool Pump Electrical Connection |
| q17 | Intercom System Replacement |
| q18 | Data Cabling – Home Office Setup |
| q19 | Fire Sprinkler System Test & Tag |
| q20 | Pressure Test – Gas Meter Upgrade |
| q21 | Security Camera Cabling & Mount |
| q22 | Grease Trap Service & Compliance |

</details>

---

## ⚖️ Trade-offs & Production Path

### 💾 Storage
The in-memory store is intentional for this scope — zero setup, instant state reset. In production:
- **SQLite** via `better-sqlite3` — single-file DB, ideal for a field ops tool at this scale
- **PostgreSQL** — for multi-instance or cloud deployments

Each function in `db.js` maps cleanly to a single DB transaction. Migration path is straightforward.

### ⚡ Concurrency
Single-process Node.js means no race conditions within one instance. Multi-process production would need the conflict check + insert to be **atomic**:
- PostgreSQL: `BEGIN; SELECT ... FOR UPDATE; INSERT ...; COMMIT;`
- SQLite: write-locked transaction

### 🔔 Notifications
Current: REST polling every 4s via `refetchInterval`.  
Production: **Server-Sent Events** with one stream endpoint per user — push on job state changes, zero polling overhead.

### 🔐 Authentication
Skipped for scope. Production design: JWT-based auth with `manager` / `technician` roles. The `managerId` in `POST /api/jobs` would be derived from the verified token, not the request body.

### 🧪 Testing
Would add:
- Unit tests for conflict detection logic in `db.js` (Jest)
- Integration tests: 409 conflict, duplicate quote assignment, complete unknown job
- E2E: full assign → complete → notification flow (Playwright)

---

## 🚢 Deployment Notes

### Frontend — Vercel

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Environment Variables | None — API URL is set in `src/api/client.js` |

### Backend — Render

| Setting | Value |
|---|---|
| Start Command | `node src/index.js` |
| Node Version | Add `"engines": { "node": "18" }` to `backend/package.json` |
| Note | In-memory store resets on each deploy — expected for this scope |

---

## 🤖 AI Tool Usage

Claude was used to scaffold boilerplate, generate seed data, and accelerate component structure. All business logic — the conflict detection algorithm, notification flow, data model relationships, and API design — was authored and reasoned through independently. The open-interval overlap check (`startA < endB && endA > startB`) was a deliberate implementation choice after working through the edge cases manually.

---

<div align="center">

Built by **Meera Mendhe** &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/meera-mendhe-953240201) &nbsp;·&nbsp; [GitHub](https://github.com/MeeraMendhe) &nbsp;·&nbsp; [Portfolio](https://meeramendhe-bd320f88.vercel.app)

</div>
