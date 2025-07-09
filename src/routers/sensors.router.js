import express from 'express';
import sensorsControllers from '../controllers/sensors.controllers.js';

const sensorRoute = express.Router();

sensorRoute.get('/:id', sensorsControllers.getSensorById);
sensorRoute.post('/add', sensorsControllers.addSensor);
sensorRoute.put('/update/:id', sensorsControllers.updateSensor);
sensorRoute.delete('/delete/:id', sensorsControllers.removeSensor);

export default sensorRoute;