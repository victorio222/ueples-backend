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
│   └── id_cards/           # ID cards storage
│   └── plants/             # Plants image storage
│   └── reports/            # Generated reports file storage
│   └── sensors/            # Sensor image storage
│   └── user_profiles/      # User profile/image storage
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

### 🌿 User Management

| Method | Endpoint              | Description              |
|--------|---------------    ----|--------------------------|
| GET    | `/api/user/`          | List all user            |
| GET    | `/api/user/:id`       | Retrieve use by id       |
| PUT    | `/api/user/update:id` | Update user info         |

### 🔐 Authentication

| Method | Endpoint                   | Description          |
|--------|----------------------------|----------------------|
| POST   | `/api/auth/register`       | Register a new user  |
| POST   | `/api/auth/signin`         | Login user           |
| POST   | `/api/auth/signout`        | Logout user          |
| POST   | `/api/auth/rememberToken`  | Refresh JWT token    |

### 🌿 Plant Information Management

| Method | Endpoint                          | Description                |
|--------|-----------------------------------|----------------------------|
| GET    | `/api/plantInformation/`          | List all plants            |
| GET    | `/api/plantInformation/:id`       | Retrieve plant by id       |
| POST   | `/api/plantInformation/add`       | Add a new plant            |
| PUT    | `/api/plantInformation/update:id` | Update plant info          |
| DELETE | `/api/plantInformation/delete/:id`| Delete plant info          |

### 🌿 Plant Requirement Management

| Method | Endpoint                           | Description                       |
|--------|------------------------------------|-----------------------------------|
| GET    | `/api/plantRequirements/:id`       | Retrieve plant requirement by id  |
| POST   | `/api/plantRequirements/add`       | Add a new plant requirement       |
| PUT    | `/api/plantRequirements/update:id` | Update plant requirement info     |
| DELETE | `/api/plantRequirements/delete/:id`| Delete plant requirement info     |

### 🌿 Plant Stage Management

| Method | Endpoint                       | Description                           |
|--------|--------------------------------|---------------------------------------|
| GET    | `/api/plantStage/`             | List all plant stage                  |
| GET    | `/api/plantStage/:id`          | Retrieve plant requirement by id      |
| GET    | `/api/plantStage/active`       | Retrieve plant requirement by status  |
| POST   | `/api/plantStage/add`          | Add a new plant stage                 |
| PUT    | `/api/plantStage/update:id`    | Update plant stage info               |
| DELETE | `/api/plantStage/delete/:id`   | Delete plant stage info               |

### 🌿 Plant Transplant Management

| Method | Endpoint                       | Description                           |
|--------|--------------------------------|---------------------------------------|
| GET    | `/api/transplant/`             | List all transplant data              |
| GET    | `/api/transplant/:id`          | Retrieve transplant data by id        |
| POST   | `/api/transplant/add`          | Add a new plant transplant info       |
| PUT    | `/api/transplant/update:id`    | Update transplant info                |
| DELETE | `/api/transplant/delete/:id`   | Delete transplant info                |

### 🌿 Plant Harvest Management

| Method | Endpoint                                | Description                            |
|--------|-----------------------------------------|----------------------------------------|
| GET    | `/api/harvest/`                         | List all harvest data                  |
| GET    | `/api/harvest/:id`                      | Retrieve harvest data by id            |
| GET    | `/api/harvest/transplat/:transplant_id` | Retrieve harvest data by transplant id |
| POST   | `/api/harvest/add`                      | Add a new plant harvest info           |
| PUT    | `/api/harvest/update:id`                | Update harvest info                    |
| DELETE | `/api/harvest/delete/:id`               | Delete harvest info                    |

### 🌿 Plant Season Management

| Method | Endpoint                       | Description                       |
|--------|--------------------------------|-----------------------------------|
| GET    | `/api/cropSeason/`             | List all transplant data          |
| GET    | `/api/cropSeason/:id`          | Retrieve season by id             |
| POST   | `/api/cropSeason/add`          | Add a new plant season info       |
| PUT    | `/api/cropSeason/update:id`    | Update season info                |
| DELETE | `/api/cropSeason/delete/:id`   | Delete season info                |

### 🌿 Hydroponic Model Management

| Method | Endpoint                            | Description                      |
|--------|-------------------------------------|----------------------------------|
| GET    | `/api/hydroponicModel/:id`          | Retrieve model by id             |
| POST   | `/api/hydroponicModel/add`          | Add a new hydroponic model info  |
| PUT    | `/api/hydroponicModel/update:id`    | Update model info                |
| DELETE | `/api/hydroponicModel/delete/:id`   | Delete model info                |

### 🌿 Register Sensor Management

| Method | Endpoint                   | Description               |
|--------|----------------------------|---------------------------|
| GET    | `/api/sensor/:id`          | Retrieve sensor by id     |
| POST   | `/api/sensor/add`          | Add a new sensor info     |
| PUT    | `/api/sensor/update:id`    | Update sensor info        |
| DELETE | `/api/sensor/delete/:id`   | Delete sensor info        |

### 🌿 Sensor Readings Management

| Method | Endpoint                   | Description                        |
|--------|----------------------------|------------------------------------|
| GET    | `/api/sensorReadings/:id`  | Retrieve sensor readings by id     |
| POST   | `/api/sensorReadings/add`  | Add a new sensor readings info     |

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