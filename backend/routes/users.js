const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const User = require("../models/Users")
const { check, validationResult } = require("express-validator")

/**
 * User Routes
 * Handles user profile management and retrieval
 */

// @route   GET api/users/profile
// @desc    Get current user's profile
// @access  Private
router.get("/profile", auth, async (req, res) => {
  try {
    // Find user by ID from auth middleware, exclude password
    const user = await User.findById(req.user.id).select("-password")
    if (!user) {
      return res.status(404).json({ msg: "User not found" })
    }
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route   PUT api/users/profile
// @desc    Update user profile
// @access  Private
router.put(
  "/profile",
  [
    auth, 
    [
      // Validation middleware
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail()
    ]
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, bio, skills, portfolio } = req.body

    try {
      const user = await User.findById(req.user.id)
      if (!user) {
        return res.status(404).json({ msg: "User not found" })
      }

      // Update user fields
      user.name = name
      user.email = email
      user.bio = bio
      user.skills = skills
      user.portfolio = portfolio

      await user.save()
      res.json(user)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route   GET api/users/:id
// @desc    Get user by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password")
    if (!user) {
      return res.status(404).json({ msg: "User not found" })
    }
    res.json(user)
  } catch (err) {
    console.error(err.message)
    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "User not found" })
    }
    res.status(500).send("Server Error")
  }
})

module.exports = router

