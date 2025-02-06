const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { createPaymentIntent } = require("../controllers/paymentController")

/**
 * Payment Routes
 * Handles payment processing with Stripe
 * All routes require authentication
 */

// @route   POST api/payments/create-payment-intent
// @desc    Create Stripe payment intent
// @access  Private
router.post("/create-payment-intent", auth, createPaymentIntent)

module.exports = router

