import sensorReadingsServices from "../services/sensorReadings.services.js";

const getReadingsById = async (req, res) => {
    try {
        const id = req.params.id;
        const readings = await sensorReadingsServices.findById(id);
        res.status(200).json(readings);
    } catch (error) {
        if(error.message === "Sensor readings not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const addReadings = async (req, res) => {
    try {
        const data = req.body;
        const result = await sensorReadingsServices.add(data);
        res.status(201).json({
            message: "Sensor readings added successfully.",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getReadingsById,
    addReadings
}