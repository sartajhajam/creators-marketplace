const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/Order")

/**
 * Controller for handling payment operations
 * Integrates with Stripe for payment processing
 */

/**
 * Create payment intent for order
 * @param {string} req.body.orderId - ID of order being paid for
 * Creates Stripe PaymentIntent and returns client secret
 */
exports.createPaymentIntent = async (req, res) => {
  try {
    const { orderId } = req.body
    
    // Find order and verify it exists
    const order = await Order.findById(orderId)
    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.price * 100, // Convert to cents for Stripe
      currency: "usd",
      metadata: { orderId: order._id.toString() }, // Store order reference
    })

    // Return client secret for frontend processing
    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

