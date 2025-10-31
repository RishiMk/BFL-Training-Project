const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  isActive: Boolean,
  image: { url: String, alt: String },
});

module.exports = mongoose.model("Category", CategorySchema);
