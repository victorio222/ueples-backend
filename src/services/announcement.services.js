import AnnouncementsRepository from "../repositories/announcement.repository.js";

const findAll = async () => {
    return await AnnouncementsRepository.findAll();
};

const findById = async (id) => {
    const announcement = await AnnouncementsRepository.findById(id);
    if (!announcement) throw new Error("Announcement not found.");
    return announcement;
};

const addAnnouncement = async (data) => {
    return await AnnouncementsRepository.create(data);
};

const updateAnnouncement = async (id, data) => {
    const updated = await AnnouncementsRepository.update(id, data);

    // Sequelize update() returns: [affectedRows]
    if (updated[0] === 0) {
        throw new Error("Announcement not found or no changes made.");
    }

    return await AnnouncementsRepository.findById(id);
};

export default {
    findAll,
    findById,
    addAnnouncement,
    updateAnnouncement
};
