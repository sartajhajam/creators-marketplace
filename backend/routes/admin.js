const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")
const { 
  getUserStats, 
  getGigStats, 
  getOrderStats 
} = require("../controllers/adminController")

/**
 * Admin Routes
 * Protected routes for admin-only operations
 * Requires both authentication and admin role
 */

// @route   GET api/admin/user-stats
// @desc    Get user statistics
// @access  Private/Admin
router.get("/user-stats", auth, adminAuth, getUserStats)

// @route   GET api/admin/gig-stats
// @desc    Get gig statistics
// @access  Private/Admin
router.get("/gig-stats", auth, adminAuth, getGigStats)

// @route   GET api/admin/order-stats
// @desc    Get order statistics
// @access  Private/Admin
router.get("/order-stats", auth, adminAuth, getOrderStats)

module.exports = router

