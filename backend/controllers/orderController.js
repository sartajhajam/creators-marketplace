const Order = require("../models/Order")
const Gig = require("../models/Gig")

/**
 * Controller for managing order operations
 * Handles order creation, retrieval, and status updates
 */

/**
 * Create new order
 * @param {Object} req.body - Contains gigId and pricingTier
 * @param {Object} req.user - Authenticated user making the order
 */
exports.createOrder = async (req, res) => {
  try {
    const { gigId, pricingTier } = req.body
    
    // Find the gig being ordered
    const gig = await Gig.findById(gigId)
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

    // Create new order with buyer and seller info
    const newOrder = new Order({
      buyer: req.user.id,
      seller: gig.seller,
      gig: gig._id,
      pricingTier,
      price: gig.pricingTiers[pricingTier].price,
    })

    const order = await newOrder.save()
    res.json(order)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get orders for current user
 * Retrieves all orders where user is either buyer or seller
 * @param {Object} req.user - Authenticated user
 */
exports.getOrders = async (req, res) => {
  try {
    // Find orders where user is either buyer or seller
    const orders = await Order.find({ 
      $or: [
        { buyer: req.user.id }, 
        { seller: req.user.id }
      ]
    })
      .populate("buyer", "name")
      .populate("seller", "name")
      .populate("gig", "title")
    res.json(orders)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Update order status
 * @param {string} req.params.id - Order ID
 * @param {string} req.body.status - New status
 * Only allows seller to update order status
 */
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body
    
    // Find order and verify it exists
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // Verify seller ownership
    if (order.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" })
    }

    // Update status and save
    order.status = status
    await order.save()

    res.json(order)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

