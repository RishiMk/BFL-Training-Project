const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// Auth
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// Categories (protected)
router.get("/categories", categoryController.getCategories);
router.post("/categories", authMiddleware, categoryController.createCategory);
router.put("/categories/:id", authMiddleware, categoryController.updateCategory);
router.delete("/categories/:id", authMiddleware, categoryController.deleteCategory);

// Products (protected for create/update/delete)
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products", authMiddleware, productController.createProduct);
router.put("/products/:id", authMiddleware, productController.updateProduct);
router.delete("/products/:id", authMiddleware, productController.deleteProduct);

// Users
router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
// router.put("/users/:id", authMiddleware, userController.updateUser);
// router.delete("/users/:id", authMiddleware, userController.deleteUser);


// Carts (protected)
router.get("/carts/:userId", authMiddleware, cartController.getCart);
router.post("/carts/:userId", authMiddleware, cartController.addToCart);

// Orders (protected)
router.get("/orders/:userId", authMiddleware, orderController.getOrders);
router.post("/orders", authMiddleware, orderController.createOrder);

module.exports = router;
