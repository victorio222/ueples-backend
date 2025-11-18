import Announcements from "../models/announcement.model.js"
import AnnouncementTarget from "../models/announcementTarget.model.js";

const findAll = async () => {
    return await Announcements.findAll({
        include: [{
            model: AnnouncementTarget,
            as: "targets"
        }]
    });
};

const findById = async (id) => {
    return await Announcements.findByPk(id, {
        include: [{
            model: AnnouncementTarget,
            as: "targets"
        }]
    });
};

const create = async (data) => {
    return await Announcements.create(data, {
        include: [{ model: AnnouncementTarget, as: "targets" }]
    });
};

const update = async (id, data) => {
    return await Announcements.update(data, {
        where: { announcement_id: id }
    });
};

export default {
    findAll,
    findById,
    create,
    update
}