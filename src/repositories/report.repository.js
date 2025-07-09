import Reports from "../models/reports.model.js";

const create = async (data) => {
  return await Reports.create(data);
};

const findAll = async () => {
  return await Reports.findAll({ order: [["report_date", "DESC"]] });
};

const findById = async (id) => {
  return await Reports.findByPk(id);
};

const remove = async (id) => {
  return await Reports.destroy({ where: { report_id: id } });
};

export default {
  create,
  findAll,
  findById,
  remove
};
