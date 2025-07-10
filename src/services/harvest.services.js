import harvestRepository from "../repositories/harvest.repository.js";
import logsRepository from "../repositories/logs.repository.js";

const addHarvest = async (data) => {
  const { user_id } = data;
  const harvest = await harvestRepository.create(data);
   await logsRepository.createLog({
    log_type: 'CREATE',
    event_desc: `Harvest of quantity ${harvest.harvest_qty} recorded.`,
    severity: 'INFO',
    module: 'PlantHarvest',
    user_id
  });
  return harvest;
};

const updateHarvest = async (id, data) => {
  const { user_id } = data;
  const existing = await harvestRepository.findById(id);
  if (!existing) throw new Error("Harvest record not found.");

  await harvestRepository.update(id, data);
  const updated = await harvestRepository.findById(id);
  
   await logsRepository.createLog({
    log_type: 'UPDATE',
    event_desc: `Harvest #${id} updated.`,
    severity: 'INFO',
    module: 'PlantHarvest',
    user_id
  });

  return updated;
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