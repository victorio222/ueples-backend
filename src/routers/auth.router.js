import express from 'express';
import authController from '../controllers/auth.controller.js';
import upload from '../middleware/multer.middleware.js';
import authMiddleware from '../middleware/auth.middleware.js';

const authRouter = express.Router();

authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.post('/register', upload.fields([{ name: 'id_card', maxCount: 1 }]), authController.register);
authRouter.post('/refresh-token', authController.refreshToken);
authRouter.get('/verify', authController.verifyEmail);

authRouter.get('/me', authMiddleware.authToken, (req, res) => {
    res.status(200).json({
        data: req.user // Decoded from the cookie by authToken
    });
});

export default authRouter;