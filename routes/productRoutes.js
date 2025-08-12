import { Router } from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';
import {isAdmin} from '../middleware/isAdminMiddleware.js';
import { getAllAdminProducts, addProduct, updateProduct, deleteProduct, updateProductVisibility } from '../controllers/adminProductController.js';

const router = Router();

// get all products
router.get('/', getAllProducts);

// getAllAdminProducts
router.get('/admin', isAdmin, getAllAdminProducts);

// admin routes to manage products
router.post('/admin/add', isAdmin, addProduct);
router.put('/admin/update/:productId', isAdmin, updateProduct);
router.delete('/admin/delete/:productId', isAdmin, deleteProduct);
router.patch('/admin/:productId/visibility', isAdmin, updateProductVisibility);

// get product by ID
router.get("/:productId", getProductById);

export default router;