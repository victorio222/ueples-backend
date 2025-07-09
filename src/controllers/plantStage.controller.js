import plantStageServices from "../services/plantStage.services.js";

const addStage = async (req, res) => {
  try {
    const stage = await plantStageServices.addStage(req.body);
    res.status(201).json({
      message: "Plant stage created successfully.",
      data: stage
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStage = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await plantStageServices.updateStage(id, req.body);
    res.status(200).json({
      message: "Plant stage updated successfully.",
      data: updated
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStages = async (req, res) => {
  try {
    const stages = await plantStageServices.getAllStages();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActiveStages = async (req, res) => {
  try {
    const stages = await plantStageServices.getActiveStages();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStageById = async (req, res) => {
  try {
    const stage = await plantStageServices.getStageById(req.params.id);
    res.status(200).json(stage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteStage = async (req, res) => {
  try {
    await plantStageServices.removeStage(req.params.id);
    res.status(200).json({ message: "Plant stage deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {
  addStage,
  updateStage,
  getAllStages,
  getActiveStages,
  getStageById,
  deleteStage
};
