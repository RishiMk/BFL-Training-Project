const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
  res.json(await Category.find());
};

exports.createCategory = async (req, res) => {
  res.json(await Category.create(req.body));
};

exports.updateCategory = async (req, res) => {
  const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};
