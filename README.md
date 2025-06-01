![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)

# 🚐 FleetCarePro

**FleetCarePro** is a fleet maintenance management web app built for municipalities, school systems, and private operators managing up to 1,500 vehicles. It centralizes maintenance scheduling, work orders, and service history into one clean, user-friendly dashboard.

---

## 📌 Purpose

FleetCarePro helps reduce downtime and streamline operations with features for:

- Creating and managing **work orders**
- Tracking **vehicle service history**
- Monitoring **preventive maintenance schedules**
- Supporting small to mid-sized **government and transit fleets**

---

## ⚙️ Tech Stack

| Layer            | Technology           |
| ---------------- | -------------------- |
| Backend          | Node.js + TypeScript |
| Frontend         | React.js (Vite)      |
| Database         | PostgreSQL           |
| API Testing      | Postman              |
| Environment Vars | `dotenv`             |

---

## 🧠 Features

- ✅ Work Order Management
- 🔄 Per-Vehicle Service History
- 📊 Pagination for Large Fleets
- 🧾 PostgreSQL-Optimized Schema
- 🚀 REST API with CRUD endpoints
- 🧩 TypeScript Type Safety

---

## 🚧 How It Works

1. Admin logs in to the dashboard
2. Views **fleet inventory** and historical service logs
3. Adds, updates, and closes **work orders**
4. Manages service flow across departments using **pagination**
5. Runs seamlessly in both office and mobile environments

---

## 🛠️ End-User Installation Instructions

### ✅ Prerequisites

- Node.js (v18+)
- PostgreSQL (local or cloud-hosted)
- Git

---

### 🔽 Step 1: Clone the Repository

```bash
git clone https://github.com/levelhlawrence/wdv349-o-PortfolioProject.git
cd FleetCarePro
```

---

### 🔧 Step 2: Install & Start the Backend

```bash
cd server
npm install
npm run dev
```

Ensure you have a `.env` file in `/server` with:

```
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/fleetcarepro_new
SECRET=your_jwt_secret
```

Run your PostgreSQL server and apply the schema.

---

### 💻 Step 3: Install & Start the Frontend

```bash
cd ../client
npm install
npm run dev
```

In `/client/.env`:

```
VITE_API_URL=http://localhost:3000/api_v1
VITE_HOME_URL=your_main_url/client
```

Then visit: `http://localhost:5173` or `Your custom URL`

---

## 📡 API Overview

| Method | Route             | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | `/vehicles`       | Fetch paginated vehicle data    |
| GET    | `/vehicles/:id`   | Get detailed vehicle info       |
| POST   | `/vehicles`       | Create a new vehicles           |
| PUT    | `/vehicles/:id`   | Update a vehicle                |
| DELETE | `/vehicles/:id`   | Delete a vehicle                |
| GET    | `/workorders`     | Fetch or paginated workorders   |
| PUT    | `/workorders/:id` | Update or close a work order    |
| POST   | `/workorders`     | Create a new work order         |
| DELETE | `/workorders/:id` | Delete a work order             |
| POST   | `/register`       | Create user account             |
| POST   | `/login`          | Login in with created account   |
| POST   | `/logout`         | Logout with user account        |
| GET    | `/check`          | Check user / Query user account |

---

## 🛟 Handoff & Support Plan

### 🛠 What To Do If the App Goes Down

If the application is not functioning:

1. **Restart Services**

   - Restart backend (`cd server && npm run dev`)
   - Restart frontend (`cd client && npm run dev`)
   - Restart PostgreSQL or verify connection string in `.env`

2. **Check Logs**
   Inspect error logs in terminal or browser console.

3. **Verify API Health**
   Test endpoints using [Postman](https://www.postman.com/) or `curl`.

4. **Contact Developer**
   If issues persist, contact the developer (see [Project Log](./docs/log.md)) for support or open an issue on the GitHub repository.

5. **Backup Strategy**

   - Use `pg_dump` to back up the database regularly
   - Export CSV reports for offline access

---

## 📈 Future Improvements

- Role-based login (Admin, Technician)
- Email notifications for overdue service
- Offline-first support for mobile devices
- One-click PDF exports of work orders

---

## 👥 Target Audience

- Local and state governments
- Public transit authorities
- School systems
- Private fleets under 1,500 vehicles

---

## 👨‍💻 Author

Developed by **Level Lawrence**

- See [docs/log.md](./docs/log.md) for changelog and contributions.
