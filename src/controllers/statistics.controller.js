import StatisticsRepository from '../repositories/statistics.repository.js';

class StatisticsController {
    async getDashboardData(req, res) {
        try {
            const { academicYear } = req.query;

            if (!academicYear) {
                return res.status(400).json({ message: "Academic Year is required" });
            }

            // Fetch both the top-level card stats and the chart data
            const [globalStats, chartData] = await Promise.all([
                StatisticsRepository.getGlobalStats(),
                StatisticsRepository.getUploadStatsByYear(academicYear)
            ]);

            res.status(200).json({
                success: true,
                counters: globalStats,
                graph: chartData
            });
        } catch (error) {
            console.error("Dashboard Controller Error:", error);
            res.status(500).json({ 
                success: false, 
                message: "Failed to fetch dashboard statistics" 
            });
        }
    }
}

export default new StatisticsController();