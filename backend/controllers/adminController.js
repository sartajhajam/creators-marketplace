const User = require("../models/Users")
const Gig = require("../models/Gig")
const Order = require("../models/Order")

/**
 * Controller for admin-only operations
 * Provides platform statistics and management functions
 */

/**
 * Get user statistics
 * Returns counts of total users, buyers, and sellers
 */
exports.getUserStats = async (req, res) => {
  try {
    // Aggregate user counts by role
    const totalUsers = await User.countDocuments()
    const buyers = await User.countDocuments({ role: "buyer" })
    const sellers = await User.countDocuments({ role: "seller" })

    res.json({ totalUsers, buyers, sellers })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get gig statistics
 * Returns counts of total, active, and pending gigs
 */
exports.getGigStats = async (req, res) => {
  try {
    // Aggregate gig counts by status
    const totalGigs = await Gig.countDocuments()
    const activeGigs = await Gig.countDocuments({ status: "active" })
    const pendingGigs = await Gig.countDocuments({ status: "pending" })

    res.json({ totalGigs, activeGigs, pendingGigs })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get order statistics
 * Returns order counts and total revenue
 */
exports.getOrderStats = async (req, res) => {
  try {
    // Get order counts by status
    const totalOrders = await Order.countDocuments()
    const completedOrders = await Order.countDocuments({ status: "completed" })
    const inProgressOrders = await Order.countDocuments({ status: "in progress" })

    // Calculate total revenue from completed orders
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

