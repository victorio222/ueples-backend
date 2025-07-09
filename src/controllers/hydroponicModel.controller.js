import hydroponicModelServices from "../services/hydroponicModel.services.js";

const getModelById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await hydroponicModelServices.findById(id);
        res.status(200).json(result);
    } catch (error) {
        if(error.message === "Hydroponic model not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const addModel = async (req, res) => {
    try {
        const data = req.body;
        const result = await hydroponicModelServices.add(data);
        res.status(201).json({
            message: "Hydroponic model added successfully.",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const updateModel = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await hydroponicModelServices.update(id, data);
        res.status(200).json({
            message: "Hydroponic model have been updated.",
            data: result
        });
    } catch (error) {
        if(error.message === "Hydroponic model not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const deleteModel = async (req, res) => {
    try {
        const id = req.params.id;
        await hydroponicModelServices.update(id);
        res.status(200).json("Hydroponic model has been deleted");
    } catch (error) {
        if(error.message === "Hydroponic model not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

export default {
    getModelById,
    addModel,
    updateModel,
    deleteModel
}