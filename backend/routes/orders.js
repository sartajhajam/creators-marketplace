const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { createOrder, getOrders, updateOrderStatus } = require("../controllers/orderController")

/**
 * Order Routes
 * Handles order creation, retrieval, and updates
 * All routes require authentication
 */

// @route   POST api/orders
// @desc    Create a new order
// @access  Private
router.post("/", auth, createOrder)

// @route   GET api/orders
// @desc    Get all orders for current user
// @access  Private
router.get("/", auth, getOrders)

// @route   PUT api/orders/:id/status
// @desc    Update order status
// @access  Private (Seller only)
router.put("/:id/status", auth, updateOrderStatus)

module.exports = router

