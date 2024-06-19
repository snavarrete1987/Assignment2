const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).send("Product not found.");
  }
};

// Add new product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Update a product by ID
exports.updateProductById = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send("Removed product.");
  } catch (err) {
    res.status(404).send("Product not found.");
  }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(204).send("All products have been removed.");
  } catch (err) {
    res.status(500).send(err);
  }
};

// Buscar productos por nombre
exports.getProductsByName = async (req, res) => {
  try {
    const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};





