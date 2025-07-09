import plantStageRepository from "../repositories/plantStage.repository.js";

const addStage = async (data) => {
  // Ensure only one active stage per transplant
  if (data.active) {
    await plantStageRepository.deactivateOtherStages(data.transplant_id);
  }

  const newStage = await plantStageRepository.create(data);
  return newStage;
};

const updateStage = async (id, data) => {
  const stage = await plantStageRepository.findById(id);
  if (!stage) throw new Error("Plant stage not found.");

  // If the update sets this stage to active, deactivate others
  if (data.active) {
    await plantStageRepository.deactivateOtherStages(stage.transplant_id);
  }

  const updated = await plantStageRepository.update(id, data);
  if (!updated) throw new Error("Failed to update stage.");

  return await plantStageRepository.findById(id);
};

const getAllStages = async () => {
  return await plantStageRepository.findAll();
};

const getActiveStages = async () => {
  return await plantStageRepository.findActiveStages();
};

const removeStage = async (id) => {
  const result = await plantStageRepository.remove(id);
  if (!result) throw new Error("Plant stage not found.");
  return true;
};

const getStageById = async (id) => {
  const stage = await plantStageRepository.findById(id);
  if (!stage) throw new Error("Plant stage not found.");
  return stage;
};

export default {
  addStage,
  updateStage,
  getAllStages,
  getActiveStages,
  removeStage,
  getStageById
};
