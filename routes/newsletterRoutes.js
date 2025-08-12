import { Router } from 'express';
import { subscribe, verify } from '../controllers/newsletterController.js';

const router = Router();

router.post('/', subscribe);
router.get('/verify', verify);

export default router;