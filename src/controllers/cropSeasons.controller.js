import cropSeasonsServices from "../services/cropSeasons.services.js";

const getSeasonById = async (req, res) => {
    try {
        const id = req.params.id;
        const season = await cropSeasonsServices.findById(id);
        res.status(200).json(season);
    } catch (error) {
        if(error.message === "Crop season not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const addSeason = async (req, res) => {
    try {
        const data = req.body;
        const result = await cropSeasonsServices.add(data);
        res.status(201).json({
            message: "Crop season added successfully.",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateSeason = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body;
        const result = await cropSeasonsServices.update(id, data);
        res.status(200).json({
            message: "Crop season have been updated.",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error)
    }
}

const deleteSeason = async (req, res) => {
    try {
        const id = req.params.id;
        await cropSeasonsServices.remove(id);
        res.status(200).json({ message: "Crop season deleted successfully." });
    } catch (error) {
        if (error.message === "Crop season not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

export default {
    getSeasonById,
    addSeason,
    updateSeason,
    deleteSeason
}