import { Router } from 'express';
import {protect} from '../middleware/authMiddleware.js';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController.js';

const router = Router();

router.get('/', protect, getCart);
router.post('/addToCart', protect, addToCart);
router.delete('/removeFromCart/:productId', protect, removeFromCart);

export default router;