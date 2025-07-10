import reportRepository from "../repositories/report.repository.js";

const addReport = async (data, file) => {
  if(file) {
    data.file_location = file.filename
  }
  return await reportRepository.create(data);
};

const getAllReports = async () => {
  return await reportRepository.findAll();
};

const getReportById = async (id) => {
  const report = await reportRepository.findById(id);
  if (!report) throw new Error("Report not found.");
  return report;
};

const deleteReport = async (id) => {
  const result = await reportRepository.remove(id);
  if (!result) throw new Error("Report not found or already deleted.");
  return true;
};

export default {
  addReport,
  getAllReports,
  getReportById,
  deleteReport
};
