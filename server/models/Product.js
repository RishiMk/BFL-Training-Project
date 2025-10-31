const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: String,
  images: [{ url: String, alt: String }],
  variants: [
    {
      sku: { type: String, unique: true },
      price: Number,
      currency: String,
      available: Boolean,
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
