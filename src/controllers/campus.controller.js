import campusServices from "../services/campus.services"

const getAllCampus = async (req, res) => {
    try {
        const campuses = await campusServices.findAll();
        res.status(200).json(campuses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCampusById = async (req, res) => {
    try {
        const campus = await campusServices.findById(req.params.id);
        res.status(200).json(campus);
    } catch (error) {
        if(error.message.includes("not found")) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        };
    };
};

const addNewCampus = async (req, res) => {
    try {
        const campus = await campusServices.addCampus(req.body);
        res.status(200).json({
            message: "Campus added successfully.",
            data: campus
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const updateCampus = async (req, res) => {
    try {
        const updateData = await campusServices.updateCampus(req.params.id, req.body);
        res.status(200).json({
            message: "Campus updated successfully.",
            data: updateData
        });
    } catch (error) {
        if(error.message.includes("not found")) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        };
    };
};

export default {
    getAllCampus,
    getCampusById,
    addNewCampus,
    updateCampus
}