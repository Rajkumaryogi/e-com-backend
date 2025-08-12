import { Router } from 'express';
import { loginAdminUser, logoutAdminUser, verifyAdminUser, forgotPasswordAdminUser, resetPasswordAdminUser } from '../controllers/adminController.js';

const router = Router();

// Admin routes
router.post('/login', loginAdminUser);
router.post('/logout', logoutAdminUser);
router.post('/forgot-password', forgotPasswordAdminUser);
router.post('/forgot-password/:token', resetPasswordAdminUser);
router.get('/verify', verifyAdminUser);

export default router;