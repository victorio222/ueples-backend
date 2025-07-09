import express from 'express';
import sensorReadingsController from '../controllers/sensorReadings.controller.js';

const readingsRoute = express.Router();

readingsRoute.get('/:id', sensorReadingsController.getReadingsById);
readingsRoute.post('/add', sensorReadingsController.addReadings);

export default readingsRoute;