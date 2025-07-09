import plantInformationServices from "../services/plantInformation.services.js";

const getAll = async (req, res) => {
    try {
        const result = await plantInformationServices.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getByPlantId = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await plantInformationServices.findById(id);
        if(!result) res.status(404).json("Plant information not found.");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addPlantInfo = async (req, res) => {
    try {
        const data = req.body;
        const plantInfo = await plantInformationServices.add(data);
        res.status(201).json({
              message: "Plant information added successfully.",
            data: plantInfo
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updatePlantInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const plantInfo = await plantInformationServices.update(id, data);
        if(!plantInfo) res.status(404).json("Plant information not found.")
        res.status(201).json({
            message: "Plant information has been updated.",
            data: plantInfo
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePlantInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await plantInformationServices.remove(id);
        if(!result) res.status(404).json("Plant information not found.");
        res.status(200).json("Plant information deleted successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getAll,
    getByPlantId,
    addPlantInfo,
    updatePlantInfo,
    deletePlantInfo
}