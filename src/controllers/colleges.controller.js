import collegesServices from "../services/colleges.services"

const getAllCollege = async (req, res) => {
    try {
        const colleges = await collegesServices.findAll();
        res.status(200).json(colleges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const getCollegeById = async (req, res) => {
    try {
        const college = await collegesServices.findById(req.params.id);
        res.status(200).json(college);
    } catch (error) {
        if (error.message.includes("not found")) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        };
    };
};

const addNewCollege = async (req, res) => {
    try {
        const college = await collegesServices.addCollege(req.body);
        res.status(201).json({
            message: "Campus added successfully.",
            data: college
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCollege = async (req, res) => {
    try {
        const updateData = await collegesServices.updateCollege(req.params.id, req.body);
        res.status(200).json({
            message: "College updated successfully.",
            data: updateData
        });
    } catch (error) {
        if(error.message.includes("not found")) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message })
        };
    };
};

export default {
    getAllCollege,
    getCollegeById,
    addNewCollege,
    updateCollege
}