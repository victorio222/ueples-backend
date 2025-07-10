import express from 'express';
import hydroponicModelController from '../controllers/hydroponicModel.controller.js';
import upload from '../middleware/multer.middleware.js';

const hydromodelRoute = express.Router();

hydromodelRoute.get('/:id', hydroponicModelController.getModelById);
hydromodelRoute.post('/add', upload.fields([{ name: 'hydromodel_image', maxCount: 1 }]), hydroponicModelController.addModel);
hydromodelRoute.put('/update/:id', upload.fields([{ name: 'hydromodel_image', maxCount: 1 }]), hydroponicModelController.updateModel);
hydromodelRoute.delete('/delete/:id', hydroponicModelController.deleteModel);

export default hydromodelRoute;