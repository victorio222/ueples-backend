import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

// Database and Models
import sequelize from './src/config/db.js';
import './src/models/index.js';

// Routers
import userRouter from './src/routers/user.router.js';
import authRouter from './src/routers/auth.router.js';
import logRouter from './src/routers/logs.router.js';
import studentRoutes from './src/routers/students.route.js';
import documentRoutes from './src/routers/documents.route.js';
import academicYearRoutes from './src/routers/academicYear.route.js';
import seedRoles from './src/seeders/seedroles.js';
import seedStudents from './src/seeders/seedstudents.js';
import seedUsers from './src/seeders/seeduser.js';
import seedAcademicYears from './src/seeders/seedacademidyears.js';
import seedDocuments from './src/seeders/seeddocuments.js';
import roleRouter from './src/routers/userrole.router.js';
import statisticsRoute from './src/routers/statistics.route.js';
import seedDocumentTypes from './src/seeders/documentType.js';
import folderRoutes from './src/routers/subfolder.route.js';
import fileRoutes from './src/routers/files.route.js';

// Helper for ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:8080', 
  'http://192.168.1.202:5173',
  'http://192.168.1.75:5173',
  'http://192.168.1.186:5173',
  'http://192.168.1.11:5173',
  'http://10.210.242.19:5173'
];
app.use(cors({
  origin: function (origin, cb) {
    console.log("Request origin:", origin || "No Origin Header");
    // console.log("Request coming from origin:", origin);
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) {
      return cb(null, true);
    } else {
      return cb(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// app.options('*', cors());

// --- Middleware ---
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Static Files ---
// Serving the uploads folder
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Routes ---
app.get('/health', (req, res) => res.status(200).send('Server is healthy'));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/roles', roleRouter);
app.use('/api/students', studentRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/academic-years', academicYearRoutes);
app.use('/api/stats', statisticsRoute);
app.use('/api/folders', folderRoutes);
app.use('/api/uploaded', fileRoutes);
// app.use('/api/logs', logRouter); // Uncomment when ready

// --- Database Sync & Server Start ---
const startServer = async () => {
  try {
    // Authenticate connection first
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Change to { alter: true } during dev if you update models
    await sequelize.sync(); 
    console.log('Tables synced to MySQL successfully!');

    await seedRoles();
    await seedDocumentTypes();
    await seedDocuments();
    await seedUsers();
    await seedStudents();
    await seedAcademicYears();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database or sync schema:', error);
    process.exit(1); // Exit process with failure
  }
};

startServer();