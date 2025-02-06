const express = require("express")
const router = express.Router()
const auth = require("./auth"); // Ensure this path is correct

const adminAuth = require("../middleware/adminAuth")
const { getUserStats, getGigStats, getOrderStats } = require("../controllers/adminController")

router.get("/user-stats", auth, adminAuth, getUserStats)
router.get("/gig-stats", auth, adminAuth, getGigStats)
router.get("/order-stats", auth, adminAuth, getOrderStats)

module.exports = router

