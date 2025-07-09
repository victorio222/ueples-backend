import harvestRepository from "../repositories/harvest.repository.js";

const addHarvest = async (data) => {
  return await harvestRepository.create(data);
};

const updateHarvest = async (id, data) => {
  const existing = await harvestRepository.findById(id);
  if (!existing) throw new Error("Harvest record not found.");

  await harvestRepository.update(id, data);
  return await harvestRepository.findById(id);
};

const getAllHarvests = async () => {
  return await harvestRepository.findAll();
};

const getHarvestById = async (id) => {
  const harvest = await harvestRepository.findById(id);
  if (!harvest) throw new Error("Harvest not found.");
  return harvest;
};

const getByTransplantId = async (transplant_id) => {
  return await harvestRepository.findByTransplantId(transplant_id);
};

const deleteHarvest = async (id) => {
  const deleted = await harvestRepository.remove(id);
  if (!deleted) throw new Error("Harvest not found.");
  return true;
};

export default {
  addHarvest,
  updateHarvest,
  getAllHarvests,
  getHarvestById,
  getByTransplantId,
  deleteHarvest
};