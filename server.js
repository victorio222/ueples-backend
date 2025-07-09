import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './src/config/db.js';
import './src/models/index.js'
import userRouter from './src/routers/user.router.js';
import authRouter from './src/routers/auth.router.js';
import plantInfoRoute from './src/routers/plantInformation.router.js';
import plantRequirementRoute from './src/routers/plantRequirements.router.js';
import sensorRoute from './src/routers/sensors.router.js';
import hydromodelRoute from './src/routers/hydroponicModel.router.js';
import readingsRoute from './src/routers/sensorReadings.router.js';
import seasonRoute from './src/routers/cropSeasons.router.js';
import logRouter from './src/routers/logs.router.js';
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

sequelize.sync({ force: false }) // { alter: true } or { force: true } to recreate every time
  .then(() => {
    console.log('✅ Tables synced to MySQL successfully!');
  })
  .catch((error) => {
    console.error('❌ Failed to sync schema:', error);
  });

// routes
app.use('/api/user/', userRouter);
app.use('/api/auth/', authRouter);
app.use('/api/plantInformation/', plantInfoRoute);
app.use('/api/plantRequirements/', plantRequirementRoute);
app.use('/api/sensor/', sensorRoute);
app.use('/api/sensorReadings/', readingsRoute);
app.use('/api/hydroponicModel/', hydromodelRoute);
app.use('/api/cropSeason/', seasonRoute);
app.use('/api/logs/', logRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})