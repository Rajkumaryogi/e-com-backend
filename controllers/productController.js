import Product from '../models/Product.js';

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ visibility: true });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export {
    getAllProducts,
    getProductById,
};
