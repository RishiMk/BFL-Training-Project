const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      sku: String,
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number,
      price: { sale: Number, currency: String },
    },
  ],
  totals: { subtotal: Number, grandTotal: Number },
  status: String,
});

module.exports = mongoose.model("Order", OrderSchema);
