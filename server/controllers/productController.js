const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: err.message });
  }
};


exports.getProductById = async (req, res) => {
  res.json(await Product.findById(req.params.id).populate("categoryId"));
};

exports.createProduct = async (req, res) => {
  res.json(await Product.create(req.body));
};

exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
