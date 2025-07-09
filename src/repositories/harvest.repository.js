import PlantHarvest from "../models/plantHarvest.model.js";

const create = async (data) => {
  return await PlantHarvest.create(data);
};

const update = async (id, data) => {
  const [updated] = await PlantHarvest.update(data, {
    where: { harvest_id: id }
  });
  return updated;
};

const findById = async (id) => {
  return await PlantHarvest.findByPk(id);
};

const findAll = async () => {
  return await PlantHarvest.findAll({ order: [["date_of_harvest", "DESC"]] });
};

const findByTransplantId = async (transplant_id) => {
  return await PlantHarvest.findAll({ where: { transplant_id } });
};

const remove = async (id) => {
  return await PlantHarvest.destroy({ where: { harvest_id: id } });
};

export default {
  create,
  update,
  findById,
  findAll,
  findByTransplantId,
  remove
};
