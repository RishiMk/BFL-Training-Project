const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  res.json(await Order.find({ userId: req.params.userId }).populate("items.productId"));
};

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation failed:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

