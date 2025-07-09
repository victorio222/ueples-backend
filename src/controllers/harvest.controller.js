import harvestServices from "../services/harvest.services.js";

const createHarvest = async (req, res) => {
  try {
    const harvest = await harvestService.addHarvest(req.body, req.user?.user_id);
    res.status(201).json({
      message: "Harvest recorded successfully.",
      data: harvest
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateHarvest = async (req, res) => {
  try {
    const updated = await harvestServices.updateHarvest(req.params.id, req.body);
    res.status(200).json({
      message: "Harvest updated.",
      data: updated
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllHarvests = async (req, res) => {
  try {
    const result = await harvestServices.getAllHarvests();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHarvestById = async (req, res) => {
  try {
    const harvest = await harvestServices.getHarvestById(req.params.id);
    res.status(200).json(harvest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getHarvestByTransplant = async (req, res) => {
  try {
    const result = await harvestServices.getByTransplantId(req.params.transplant_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHarvest = async (req, res) => {
  try {
    await harvestServices.deleteHarvest(req.params.id);
    res.status(200).json({ message: "Harvest deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {
  createHarvest,
  updateHarvest,
  getAllHarvests,
  getHarvestById,
  getHarvestByTransplant,
  deleteHarvest
};
