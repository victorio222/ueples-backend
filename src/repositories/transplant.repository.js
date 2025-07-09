import PlantTransplant from "../models/plantTransplant.model.js";

const create = async (data) => {
  return await PlantTransplant.create(data);
};

const update = async (id, data) => {
  const [updated] = await PlantTransplant.update(data, {
    where: { transplant_id: id }
  });
  return updated;
};

const findById = async (id) => {
  return await PlantTransplant.findByPk(id);
};

const findAll = async () => {
  return await PlantTransplant.findAll({ order: [["transplant_date", "DESC"]] });
};

const findByStatus = async (status) => {
  return await PlantTransplant.findAll({ where: { status } });
};

const remove = async (id) => {
  return await PlantTransplant.destroy({ where: { transplant_id: id } });
};

export default {
  create,
  update,
  findById,
  findAll,
  findByStatus,
  remove
};
