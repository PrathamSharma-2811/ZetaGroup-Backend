const ZetaProducts = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const product = new ZetaProducts(req.body);
        const result = await product.save();
        res.status(200).json({ message: "Product added to DB!", data: result });
    } catch (err) {
        res.status(500).json({ message: "Error adding product to DB!", data: err });
    }
};

// Get all products
const getall = async (req, res) => {
    try {
        const result = await ZetaProducts.find();
        res.status(200).json({ message: "All products", data: result });
    } catch (err) {
        res.status(500).json({ message: "Error getting all products", data: err });
    }
};

// Get product by ID
const getprodbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ZetaProducts.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }
        res.status(200).json({ message: "Product found!", data: product });
    } catch (err) {
        res.status(500).json({ message: "Error from server", data: err });
    }
};

// Update product
const updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ZetaProducts.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }
        res.status(200).json({ message: "Product updated!", data: product });
    } catch (err) {
        res.status(500).json({ message: "Error from server for updation", data: err });
    }
};

// Delete product
const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ZetaProducts.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }
        res.status(200).json({ message: "Product deleted!", data: product });
    } catch (err) {
        res.status(500).json({ message: "Error from server for deletion", data: err });
    }
};

module.exports = {
    createProduct,
    getall,
    getprodbyid,
    updateproduct,
    deleteproduct
};
