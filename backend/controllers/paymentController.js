const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/Order")

exports.createPaymentIntent = async (req, res) => {
  try {
    const { orderId } = req.body
    const order = await Order.findById(orderId)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.price * 100, // Stripe expects amount in cents
      currency: "usd",
      metadata: { orderId: order._id.toString() },
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

