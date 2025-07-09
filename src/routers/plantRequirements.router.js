import express from 'express';
import plantRequirementsController from '../controllers/plantRequirements.controller.js';

const plantRequirementRoute = express.Router();

plantRequirementRoute.get('/:id', plantRequirementsController.getRequirementById);
plantRequirementRoute.post('/add', plantRequirementsController.newRequirement);
plantRequirementRoute.put('/update/:id', plantRequirementsController.updateRequirement);
plantRequirementRoute.delete('/delete/:id', plantRequirementsController.deleteRequirement);

export default plantRequirementRoute;