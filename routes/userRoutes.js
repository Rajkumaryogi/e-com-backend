import { Router } from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {getMe, updateMe,deleteMe} from '../controllers/userController.js';

const router = Router();

// Current user routes
router.get('/me', protect, getMe);
router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

export default router;
