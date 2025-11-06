import express from 'express';
import userroleController from '../controllers/userrole.controller.js';

const roleRouter = express.Router();

roleRouter.get('/', userroleController.getAllRoles);
roleRouter.post('/add', userroleController.addRoles);

export default roleRouter;