const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { 
  sendMessage, 
  getMessages 
} = require("../controllers/messageController")

/**
 * Message Routes
 * Handles user-to-user communication
 * All routes require authentication
 */

// @route   POST api/messages
// @desc    Send a new message
// @access  Private
router.post("/", auth, sendMessage)

// @route   GET api/messages/:userId
// @desc    Get conversation with specific user
// @access  Private
router.get("/:userId", auth, getMessages)

module.exports = router
