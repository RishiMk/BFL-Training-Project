const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  res.json(await Cart.findOne({ userId: req.params.userId }).populate("items.productId"));
};

exports.addToCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    cart = await Cart.create({
      userId: req.params.userId,
      items: [],
      currency: "INR",
      summary: { subtotal: 0, total: 0 },
      status: "active",
    });
  }
  cart.items.push(req.body);
  cart.summary.subtotal += req.body.priceSnapshot.price * req.body.qty;
  cart.summary.total = cart.summary.subtotal;
  await cart.save();
  res.json(cart);
};
