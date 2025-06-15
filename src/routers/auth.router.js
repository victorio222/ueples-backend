import express from 'express';

const router = express.Router();

router.post('/signin');
router.post('/signout');
router.post('/register');
router.post('/rememberToken');

export default router;