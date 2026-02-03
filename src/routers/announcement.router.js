    import express from 'express';
    import announcementController from '../controllers/announcement.controller.js';

    const announcementRouter = express.Router();

    announcementRouter.get('/', announcementController.getAllAnnouncements);
    announcementRouter.get('/:id', announcementController.getAnnouncementById);
    announcementRouter.post('/', announcementController.addNewAnnouncement);
    announcementRouter.put('/:id', announcementController.updateAnnouncement);

    export default announcementRouter;