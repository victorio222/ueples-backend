import express from 'express';
import hydroponicModelController from '../controllers/hydroponicModel.controller.js';

const hydromodelRoute = express.Router();

hydromodelRoute.get('/:id', hydroponicModelController.getModelById);
hydromodelRoute.post('/add', hydroponicModelController.addModel);
hydromodelRoute.put('/update/:id', hydroponicModelController.updateModel);
hydromodelRoute.delete('/delete/:id', hydroponicModelController.deleteModel);

export default hydromodelRoute;