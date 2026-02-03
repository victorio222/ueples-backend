import express from "express";
import notificationController from "../controllers/notifications.controller.js";

const router = express.Router();

// GET all notifications
router.get("/", notificationController.getAllNotifications);

// GET single notification
router.get("/:id", notificationController.getNotificationById);

// CREATE notification
router.post("/", notificationController.createNotification);

// UPDATE notification
router.put("/:id", notificationController.updateNotification);

// DELETE notification
router.delete("/:id", notificationController.deleteNotification);

export default router;
