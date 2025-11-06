import express, { Router } from 'express';
import collegesController from '../controllers/colleges.controller';

const collegeRouter = express.Router();

collegeRouter.get('/', collegesController.getAllCollege);
collegeRouter.get('/:id', collegesController.getCollegeById);
collegeRouter.post('/add', collegesController.addNewCollege);
collegeRouter.put('/:id/update', collegesController.updateCollege);

export default collegeRouter;