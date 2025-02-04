const User = require("../routes/users")
const Gig = require("../models/Gig")
const Order = require("../models/Order")

exports.getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const buyers = await User.countDocuments({ role: "buyer" })
    const sellers = await User.countDocuments({ role: "seller" })

    res.json({ totalUsers, buyers, sellers })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

exports.getGigStats = async (req, res) => {
  try {
    const totalGigs = await Gig.countDocuments()
    const activeGigs = await Gig.countDocuments({ status: "active" })
    const pendingGigs = await Gig.countDocuments({ status: "pending" })

    res.json({ totalGigs, activeGigs, pendingGigs })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

exports.getOrderStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments()
    const completedOrders = await Order.countDocuments({ status: "completed" })
    const inProgressOrders = await Order.countDocuments({ status: "in progress" })

    const revenue = await Order.aggregate([
      { $match: { status: "completed" } },
      { $group: { _id: null, total: { $sum: "$price" } } },
    ])

    res.json({
      totalOrders,
      completedOrders,
      inProgressOrders,
      revenue: revenue[0] ? revenue[0].total : 0,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

