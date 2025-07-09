import transplantRepository from "../repositories/transplant.repository.js";

const addTransplant = async (data) => {
  if (data.status === 'active') {
    // Optional: Ensure only one active transplant per model
    const activeTransplants = await transplantRepository.findByStatus('active');
    const sameModelActive = activeTransplants.find(t => t.hydromodel_id === data.hydromodel_id);
    if (sameModelActive) {
      throw new Error("An active transplant already exists for this model.");
    }
  }

  return await transplantRepository.create(data);
};

const updateTransplant = async (id, data) => {
  const transplant = await transplantRepository.findById(id);
  if (!transplant) throw new Error("Transplant not found.");

  const updated = await transplantRepository.update(id, data);
  if (!updated) throw new Error("Update failed.");

  return await transplantRepository.findById(id);
};

const getAllTransplants = async () => {
  return await transplantRepository.findAll();
};

const getTransplantById = async (id) => {
  const transplant = await transplantRepository.findById(id);
  if (!transplant) throw new Error("Transplant not found.");
  return transplant;
};

const deleteTransplant = async (id) => {
  const deleted = await transplantRepository.remove(id);
  if (!deleted) throw new Error("Transplant not found.");
  return true;
};

export default {
  addTransplant,
  updateTransplant,
  getAllTransplants,
  getTransplantById,
  deleteTransplant
};
