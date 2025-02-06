const express = require("express")
const router = express.Router()
const { signup, login } = require("../controllers/authController")

/**
 * Authentication Routes
 * Handles user registration and login
 */

// @route   POST api/auth/signup
// @desc    Register a new user
// @access  Public
router.post("/signup", signup)

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post("/login", login)

module.exports = router
