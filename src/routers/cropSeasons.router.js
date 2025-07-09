import express from 'express';
import cropSeasonsController from '../controllers/cropSeasons.controller.js';

const seasonRoute = express.Router();

seasonRoute.get('/:id', cropSeasonsController.getSeasonById);
seasonRoute.post('/add', cropSeasonsController.addSeason);
seasonRoute.put('/update/:id', cropSeasonsController.updateSeason);
seasonRoute.delete('/delete/:id', cropSeasonsController.deleteSeason);

export default seasonRoute;