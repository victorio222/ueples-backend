import express from 'express';
import plantInformationController from '../controllers/plantInformation.controller.js';

const plantInfoRoute = express.Router();

plantInfoRoute.get('/', plantInformationController.getAll);
plantInfoRoute.get('/:id', plantInformationController.getByPlantId);
plantInfoRoute.post('/add', plantInformationController.addPlantInfo);
plantInfoRoute.put('/update/:id', plantInformationController.updatePlantInfo);
plantInfoRoute.delete('/delete/:id', plantInformationController.deletePlantInfo)

export default plantInfoRoute;