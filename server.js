import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './src/config/db.js';
import './src/models/index.js'
import userRouter from './src/routers/user.router.js';
import authRouter from './src/routers/auth.router.js';
import logRouter from './src/routers/logs.router.js';
import reportRouter from './src/routers/report.router.js';
import path from 'path';
import collegeRouter from './src/routers/colleges.router.js';
import announcementRouter from './src/routers/announcement.router.js';
import proposalsRouter from './src/routers/proposals.router.js';
import proposalFilesRouter from './src/routers/proposalFiles.router.js';
import notificationRouter from './src/routers/notifications.router.js';


const PORT = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];

const app = express()
app.use(express.json());

app.use(cors({
  origin: function (origin, cb) {
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) {
      return cb(null, true);
    } else {
      return cb("Not allowed by cors");
    }
  },
  credentials: true
}));

sequelize.sync({ alter: true }) // { alter: true } or { force: true } to recreate every time
  .then(() => {
    console.log('Tables synced to MySQL successfully!');
  })
  .catch((error) => {
    console.error('Failed to sync schema:', error);
  });

// routes
app.use('/api/auth', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/colleges', collegeRouter);
app.use('/api/logs/', logRouter);
app.use('/api/report/', reportRouter);
app.use('/api/announcement/', announcementRouter);
app.use('/api/proposal/', proposalsRouter);
app.use('/api/proposalFiles/', proposalFilesRouter);
app.use('/api/notifications/', notificationRouter);
app.use('/api/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})