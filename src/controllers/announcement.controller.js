import announcementsServices from "../services/announcement.services.js";

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementsServices.findAll();
        return res.status(200).json(announcements);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAnnouncementById = async (req, res) => {
    try {
        const announcement = await announcementsServices.findById(req.params.id);
        return res.status(200).json(announcement);
    } catch (error) {
        if (error.message.includes("not found")) {
            return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }
};

const addNewAnnouncement = async (req, res) => {
    try {
        const announcement = await announcementsServices.addAnnouncement(req.body);
        return res.status(201).json({
            message: "Announcement added successfully.",
            data: announcement
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateAnnouncement = async (req, res) => {
    try {
        const updateData = await announcementsServices.updateAnnouncement(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            message: "Announcement updated successfully.",
            data: updateData
        });

    } catch (error) {
        if (error.message.includes("not found")) {
            return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }
};

export default {
    getAllAnnouncements,
    getAnnouncementById,
    addNewAnnouncement,
    updateAnnouncement
};
