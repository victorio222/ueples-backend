import PlantStage from "../models/plantStage.model.js";

const create = async (data) => {
  return await PlantStage.create(data);
};

const update = async (id, data) => {
  const [updated] = await PlantStage.update(data, {
    where: { plant_stage_id: id }
  });
  return updated;
};

const findById = async (id) => {
  return await PlantStage.findByPk(id);
};

const findAll = async () => {
  return await PlantStage.findAll({ order: [["created_at", "DESC"]] });
};

const findActiveStages = async () => {
  return await PlantStage.findAll({ where: { active: true } });
};

const deactivateOtherStages = async (transplant_id) => {
  return await PlantStage.update({ active: false }, {
    where: { transplant_id }
  });
};

const remove = async (id) => {
  return await PlantStage.destroy({ where: { plant_stage_id: id } });
};

export default {
  create,
  update,
  findById,
  findAll,
  findActiveStages,
  deactivateOtherStages,
  remove
};
