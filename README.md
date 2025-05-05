![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)

<br>

# 🚐 FleetCarePro

FleetCarePro is a streamlined fleet maintenance management application designed to help municipalities, government agencies, and small fleet operators (up to 1,500 vehicles) efficiently manage vehicle maintenance records, work orders, and service history.

---

## 📌 Purpose

FleetCarePro simplifies the task of maintaining a fleet of vehicles by offering a centralized platform for:

- Creating and managing **work orders**
- Tracking **vehicle service history**
- Monitoring **maintenance schedules**
- Managing **fleet size**, big or small — with a focus on government and local transit needs

---

## ⚙️ Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Backend          | Node.js with TypeScript |
| Frontend         | React.js                |
| Database         | PostgreSQL              |
| API Testing      | Postman                 |
| Environment Vars | `dotenv`                |

---

## 🧠 Features

- ✅ **Work Order Management**: Create, update, and close work orders for any vehicle.
- 🔄 **Service History Tracking**: Every vehicle has a detailed log of completed work.
- 📊 **Pagination Support**: Easily navigate through large lists of vehicles or work orders.
- 🧾 **Scalable Database**: PostgreSQL-backed relational schema designed for performance.
- 🚀 **REST API**: Modular, testable endpoints for all CRUD operations.
- 🧩 **Type-safe Backend**: Written in TypeScript for more reliable, maintainable code.

---

## 🚧 Usage Overview

1. **Admin or Fleet Manager logs in**
2. Views entire **vehicle list** with service details
3. Can create new **work orders**
4. Track and close work orders after completion
5. View **paginated data** for large fleets
6. Responsive UI for field and office staff

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/levelhlawrence/wdv349-o-PortfolioProject.git

cd FleetCarePro
```

### 2. Set up the server

```bash
cd server
npm install
npm run dev
```

### 3. Set up the frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

In the **.env** file:

```bash
env
VITE_API_URL=http://localhost:3000/api_v1
DATABASE_URL=postgresql://user:password@localhost:5432/fleetcarepro_new
```

## API Structure

Method Route Description

```javascript
GET /vehicles Fetch paginated vehicle data
POST /workorders Create a new work order
PUT /workorders/:id Update or close a work order
GET /vehicles/:id Get detailed vehicle info
```

## 📈 Future Improvements

- User authentication & roles (admin, technician)

- Email alerts for overdue maintenance

- Mobile responsiveness for field use

- PDF export of work orders

## 👨‍💼 Target Audience

- County governments

- City transit fleets

- School districts

- Private companies with <1,500 vehicles

`🧑‍💻 Author
Developed by Level Lawrence`

- ### Check out the [Log](./docs/log.md) for my info.
