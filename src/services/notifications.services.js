// import NotificationRepository from "../repositories/notifications.repository.js";

// const getAllNotifications = async () => {
//     return await NotificationRepository.findAll();
// };

// const getNotificationById = async (id) => {
//     const notification = await NotificationRepository.findById(id);
//     if (!notification) throw new Error("Notification not found.");
//     return notification;
// };

// const createNotification = async (data) => {
//     return await NotificationRepository.create(data);
// };

// const updateNotification = async (id, data) => {
//     const result = await NotificationRepository.update(id, data);
//     if (result[0] === 0) throw new Error("Notification not found or no changes applied.");
//     return await NotificationRepository.findById(id);
// };

// const deleteNotification = async (id) => {
//     const deleted = await NotificationRepository.deleteById(id);
//     if (!deleted) throw new Error("Notification not found.");
//     return true;
// };

// export default {
//     getAllNotifications,
//     getNotificationById,
//     createNotification,
//     updateNotification,
//     deleteNotification
// };
