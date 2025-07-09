import reportServices from "../services/report.services.js";

const createReport = async (req, res) => {
  try {
    const data = req.body;
    const result = await reportServices.addReport(data);
    res.status(201).json({
      message: "Report created successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllReports = async (req, res) => {
  try {
    const result = await reportServices.getAllReports();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await reportServices.getReportById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const id = req.params.id;
    await reportServices.deleteReport(id);
    res.status(200).json({ message: "Report deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {
  createReport,
  getAllReports,
  getReportById,
  deleteReport
};
