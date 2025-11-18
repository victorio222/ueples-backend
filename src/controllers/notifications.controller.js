import NotificationService from "../services/notifications.services.js";

const getAllNotifications = async (req, res) => {
    try {
        const notifications = await NotificationService.getAllNotifications();
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getNotificationById = async (req, res) => {
    try {
        const notification = await NotificationService.getNotificationById(req.params.id);
        res.json(notification);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const createNotification = async (req, res) => {
    try {
        const created = await NotificationService.createNotification(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateNotification = async (req, res) => {
    try {
        const updated = await NotificationService.updateNotification(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteNotification = async (req, res) => {
    try {
        await NotificationService.deleteNotification(req.params.id);
        res.json({ message: "Notification deleted successfully" });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export default {
    getAllNotifications,
    getNotificationById,
    createNotification,
    updateNotification,
    deleteNotification
};
