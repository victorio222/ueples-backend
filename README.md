# 🌱 Smart Hydroponic Farming System - Backend API

This is the backend of the **Smart Hydroponic Farming System**, built with **Node.js**, **Express**, **Sequelize**, and **MySQL**. It provides RESTful APIs for managing users, plants, sensors, logs, transplanting, harvesting, and reporting in a smart farming setup.

---

## 📦 Technologies Used

- **Node.js** + **Express** — REST API
- **Sequelize** — MySQL ORM
- **MySQL** — Relational database
- **JWT** — Token-based authentication
- **bcrypt** — Password encryption
- **dotenv** — Environment variable config
- **CORS** — Cross-Origin Resource Sharing

---

## 📁 Project Structure

```
├── src/
│   ├── config/             # DB configuration
│   ├── controllers/        # Request handlers
│   ├── models/             # Sequelize models
│   ├── repositories/       # Data access layer
│   ├── routers/            # API route declarations
│   ├── services/           # Business logic
│   └── utils/              # Helpers (auth, JWT, etc.)
├── .env                    # Environment variables
├── server.js               # Main server file
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smart-hydroponics-backend.git
cd smart-hydroponics-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root and add the following:

```env
PORT=5000
DB_NAME=smarthydroponic_db
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
JWT_EMAIL_SECRET=your_email_secret
CLIENT_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm start
```

---

## 🌐 API Endpoints Overview

### 🔐 Authentication

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | `/api/auth/register` | Register a new user  |
| POST   | `/api/auth/login`    | Login user           |
| POST   | `/api/auth/logout`   | Logout user          |
| POST   | `/api/auth/refresh`  | Refresh JWT token    |

### 🌿 Plant Management

| Method | Endpoint                          | Description                |
|--------|-----------------------------------|----------------------------|
| GET    | `/api/plantInformation/`          | List all plants            |
| POST   | `/api/plantInformation/`          | Add a new plant            |
| PATCH  | `/api/plantInformation/:id`       | Update plant info          |
| DELETE | `/api/plantInformation/:id`       | Delete plant info          |

### 📊 Other Modules

- `/api/plantRequirements/`
- `/api/plantStage/`
- `/api/transplant/`
- `/api/harvest/`
- `/api/sensor/`
- `/api/sensorReadings/`
- `/api/cropSeason/`
- `/api/hydroponicModel/`
- `/api/report/`
- `/api/logs/`

Each module supports standard CRUD operations with proper validation and logging.

---

## ✅ Database Synchronization

The schema is synced automatically on server start:

```js
sequelize.sync({ force: false })
```

Use `{ force: true }` **only during development** to drop and recreate all tables.

---

## 📌 Future Enhancements

- Role-based access control
- Automatic PDF report generation
- Sensor graph API for analytics
- Email notification system

---

## 👨‍💻 Author

Developed by Victorio Cabatingan and team.

---

## 🧾 License

Licensed under the **MIT License**.