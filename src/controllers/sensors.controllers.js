import sensorsServices from "../services/sensors.services.js";

const getSensorById = async (req, res) => {
    try {
        const id = req.params.id;
        const sensor = await sensorsServices.findById(id);
        res.status(200).json(sensor);
    } catch (error) {
        if(error.message === "Sensor not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const addSensor = async (req, res) => {
    try {
        const data = req.body;
        const image = req.files?.sensor_image?.[0];
        const result = await sensorsServices.add(data, image);
        res.status(201).json({
            message: "Sensor added successfully.",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSensor = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const image = req.files?.sensor_image?.[0];
        const result = await sensorsServices.update(id, data, image);
        res.status(200).json({
            message: "Sensor have been updated.",
            data: result
        });
    } catch (error) {
        if(error.message === "Sensor not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

const removeSensor = async (req, res) => {
    try {
        const id = req.params.id;
        await sensorsServices.remove(id);
        res.status(200).json("Sensor deleted successfully.")
    } catch (error) {
        if(error.message === "Sensor not found.") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    };
};

export default {
    getSensorById,
    addSensor,
    updateSensor,
    removeSensor
}