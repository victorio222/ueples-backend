# 🌱 Smart Hydroponic Farming System - Backend API

This is the backend of the **URDS SYSTEM**, built with **Node.js**, **Express**, **Sequelize**, and **MySQL**. It provides RESTful APIs for managing users, research proposals and projects, tracking of statuses, logs, revision history, and monitoring in a research management setup.

---

## 📦 Technologies Used

- **Node.js** + **Express** — REST API
- **Sequelize** — MySQL ORM
- **MySQL** — Relational database
- **JWT** — Token-based authentication
- **bcrypt** — Password encryption
- **dotenv** — Environment variable config
- **CORS** — Cross-Origin Resource Sharing
- **Multer** —  File upload handling

---

## 📁 Project Structure

```
├── src/
│   ├── config/             # DB configuration
│   ├── controllers/        # Request handlers
│   └── middleware/         # Request pre-processing utilities
│   ├── models/             # Sequelize models
│   ├── repositories/       # Data access layer
│   ├── routers/            # API route declarations
│   ├── services/           # Business logic
│   └── utils/              # Helpers (auth, JWT, etc.)
├── uploads/               
│   └── reports/            # Generated reports file storage
│   └── user_profiles/      # User profile/image storage
├── .env                    # Environment variables
├── server.js               # Main server file
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/urds-system-server.git
cd urds-system-server
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

### 🌿 User Management

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/user/`          |  List all user       |
| GET    | `/api/user/:id`       |  Retrieve use by id  |
| PUT    | `/api/user/update:id` |  Update user info    |

### 🔐 Authentication

| Method | Endpoint                   | Description          |
|--------|----------------------------|----------------------|
| POST   | `/api/auth/register`       | Register a new user  |
| POST   | `/api/auth/signin`         | Login user           |
| POST   | `/api/auth/signout`        | Logout user          |
| POST   | `/api/auth/rememberToken`  | Refresh JWT token    |

### 🌿 Generate Report Management

| Method | Endpoint                   | Description               |
|--------|----------------------------|---------------------------|
| GET    | `/api/report/`             | List all reports          |
| GET    | `/api/report/:id`          | Retrieve report by id     |
| POST   | `/api/report/add`          | Add a new report          |
| DELETE | `/api/report/delete/:id`   | Delete report             |

### 🌿 Logs Management

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/api/logs/`              | List all logs             |
| GET    | `/api/logs/filter`        | Filter reports            |
| POST   | `/api/logs/add`           | Add a new logs            |
| GET    | `/api/logs/user/:user_id` | Retrieve logs by user id  |

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