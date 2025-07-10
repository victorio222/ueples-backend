import express from 'express';
import sensorsControllers from '../controllers/sensors.controllers.js';
import upload from '../middleware/multer.middleware.js';

const sensorRoute = express.Router();

sensorRoute.get('/:id', upload.fields([{ name: 'sensor_image', maxCount: 1 }]), sensorsControllers.getSensorById);
sensorRoute.post('/add', sensorsControllers.addSensor);
sensorRoute.put('/update/:id', upload.fields([{ name: 'sensor_image', maxCount: 1 }]), sensorsControllers.updateSensor);
sensorRoute.delete('/delete/:id', sensorsControllers.removeSensor);

export default sensorRoute;