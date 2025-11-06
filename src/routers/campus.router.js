import express from 'express';
import campusController from '../controllers/campus.controller';

const campusRouter = express.Router();

campusRouter.get('/', campusController.getAllCampus);
campusRouter.get('/:id', campusController.getCampusById);
campusRouter.post('/add', campusController.addNewCampus);
campusRouter.put('/:id/update', campusController.updateCampus);

export default campusRouter;