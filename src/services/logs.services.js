import logsRepository from "../repositories/logs.repository.js";

const createLog = async (logData) => {
  return await logsRepository.createLog(logData);
};

const getAllLogs = async () => {
  return await logsRepository.findAllLogs();
};

const getLogsByFilter = async (filter) => {
  return await logsRepository.findByFilter(filter);
};

const getLogsByUser = async (user_id) => {
  return await logsRepository.findByUser(user_id);
};

export default {
  createLog,
  getAllLogs,
  getLogsByFilter,
  getLogsByUser
};
