import express from 'express';
import plantInformationController from '../controllers/plantInformation.controller.js';
import upload from '../middleware/multer.middleware.js';

const plantInfoRoute = express.Router();

plantInfoRoute.get('/', plantInformationController.getAll);
plantInfoRoute.get('/:id', plantInformationController.getByPlantId);
plantInfoRoute.post('/add', upload.fields([{ name: 'plant_image', maxCount: 1 }]), plantInformationController.addPlantInfo);
plantInfoRoute.put('/update/:id', upload.fields([{ name: 'plant_image', maxCount: 1 }]), plantInformationController.updatePlantInfo);
plantInfoRoute.delete('/delete/:id', plantInformationController.deletePlantInfo)

export default plantInfoRoute;