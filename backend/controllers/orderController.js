const Order = require("../models/Order")
const Gig = require("../models/Gig")

exports.createOrder = async (req, res) => {
  try {
    const { gigId, pricingTier } = req.body
    const gig = await Gig.findById(gigId)

    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

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

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ $or: [{ buyer: req.user.id }, { seller: req.user.id }] })
      .populate("buyer", "name")
      .populate("seller", "name")
      .populate("gig", "title")
    res.json(orders)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    if (order.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" })
    }

    order.status = status
    await order.save()

    res.json(order)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

