import logsServices from "../services/logs.services";

const createLog = async (req, res) => {
  try {
    const logData = req.body;
    const result = await logsServices.createLog(logData);
    res.status(201).json({
      message: "Log created successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLogs = async (req, res) => {
  try {
    const logs = await logsServices.getAllLogs();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLogsByUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const logs = await logsServices.getLogsByUser(userId);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLogsByFilter = async (req, res) => {
  try {
    const filter = req.query; // e.g., ?severity=ERROR&module=Auth
    const logs = await logsServices.getLogsByFilter(filter);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createLog,
  getAllLogs,
  getLogsByUser,
  getLogsByFilter
};
