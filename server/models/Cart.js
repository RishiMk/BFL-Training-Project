const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      sku: String,
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number,
      priceSnapshot: { price: Number, currency: String },
    },
  ],
  currency: String,
  summary: { subtotal: Number, total: Number },
  status: String,
});

module.exports = mongoose.model("Cart", CartSchema);
