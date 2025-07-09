import transplantServices from "../services/transplant.services.js";

const createTransplant = async (req, res) => {
  try {
    const transplant = await transplantServices.addTransplant(req.body);
    res.status(201).json({
      message: "Transplant created successfully.",
      data: transplant
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTransplant = async (req, res) => {
  try {
    const updated = await transplantServices.updateTransplant(req.params.id, req.body);
    res.status(200).json({
      message: "Transplant updated successfully.",
      data: updated
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllTransplants = async (req, res) => {
  try {
    const result = await transplantServices.getAllTransplants();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTransplantById = async (req, res) => {
  try {
    const result = await transplantServices.getTransplantById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTransplant = async (req, res) => {
  try {
    await transplantServices.deleteTransplant(req.params.id);
    res.status(200).json({ message: "Transplant deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {
  createTransplant,
  updateTransplant,
  getAllTransplants,
  getTransplantById,
  deleteTransplant
};
