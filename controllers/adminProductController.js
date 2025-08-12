import Product from '../models/Product.js';

// to get all products
const getAllAdminProducts = async (req, res) => {
    console.warn("rtest");
    try {
        const products = await Product.find().sort({ order: 1 }).lean();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// patch to toggle product visibility
const updateProductVisibility = async (req, res) => {
    const { productId } = req.params;
    const { visibility } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { visibility },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update product visibility: ' + err.message });
    }
};

// Additional product-related functions can be added here
const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//delete product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update product by ID
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export {
    getAllAdminProducts,
    updateProductVisibility,
    addProduct,
    deleteProduct,
    updateProduct,
};