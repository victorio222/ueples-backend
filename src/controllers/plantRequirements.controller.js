import plantRequirementsServices from "../services/plantRequirements.services.js";

const getRequirementById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await plantRequirementsServices.findById(id);
        res.status(200).json(result);
    } catch (error) {
        if(error.message === "Plant requirements not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const newRequirement = async (req, res) => {
    try {
        const data = req.body;
        const requirements = await plantRequirementsServices.addRequirement(data);
        res.status(201).json({
            message: "Plant requirements added successfully.",
            data: requirements
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateRequirement = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body;
        const updatedRequirements = await plantRequirementsServices.updateRequirement(id, data);
        res.status(200).json({
            message: "Plant requirements have been updated.",
            data: updatedRequirements
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error)
    }
}

const deleteRequirement = async (req, res) => {
    try {
        const id = req.params.id;
        await plantRequirementsServices.deleteRequirement(id);
        res.status(200).json({ message: "Plant requirements deleted successfully." });
    } catch (error) {
        if (error.message === "Plant requirements not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

export default {
    getRequirementById,
    newRequirement,
    updateRequirement,
    deleteRequirement
}