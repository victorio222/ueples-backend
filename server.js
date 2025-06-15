import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './src/config/db.js';
import User from './src/models/user.model.js';
import userRouter from './src/routers/user.router.js';
import authRouter from './src/routers/auth.router.js'
// import dbConnection from './src/config/db.js';

const PORT = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];

const app = express()
app.use(express.json());
// dbConnection();

app.use(cors({
    origin: function(origin, cb) {
        if(!origin) return cb(null, true);
        if(allowedOrigins.includes(origin)) {
            return cb(null, true);
        } else {
            return cb("Not allowed by cors");
        }
    },
    credentials: true
}));

sequelize.sync() // { alter: force } or { force: true } to recreate every time
  .then(() => {
    console.log('✅ Tables synced to MySQL successfully!');
  })
  .catch((error) => {
    console.error('❌ Failed to sync schema:', error);
  });

// routes
app.use('/api/user', userRouter);
app.use('/api/auth/', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http0://localhost:${PORT}`);
})