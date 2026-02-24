import express from 'express';
import StatisticsController from '../controllers/statistics.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const statisticsRoute = express.Router();

// Route for the main dashboard data
// Example call: GET /api/stats/dashboard?academicYear=2023-2024
statisticsRoute.get('/dashboard', authMiddleware.authToken, StatisticsController.getDashboardData);

export default statisticsRoute;