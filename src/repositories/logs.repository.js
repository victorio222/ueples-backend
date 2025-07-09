import Logs from "../models/logs.model.js";

const createLog = async (data) => {
  return await Logs.create(data);
};

const findAllLogs = async () => {
  return await Logs.findAll({ order: [['timestamp', 'DESC']] });
};

const findByFilter = async (filter = {}) => {
  return await Logs.findAll({ where: filter, order: [['timestamp', 'DESC']] });
};

const findByUser = async (user_id) => {
  return await Logs.findAll({ where: { user_id }, order: [['timestamp', 'DESC']] });
};

export default {
  createLog,
  findAllLogs,
  findByFilter,
  findByUser
};
