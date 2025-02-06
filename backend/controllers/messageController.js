const Message = require("../models/Message")

/**
 * Controller for handling messaging functionality
 */

/**
 * Send a new message
 * @param {Object} req.body - Contains receiverId, content, orderId, and attachments
 * @param {Object} req.user - Authenticated user sending the message
 */
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content, orderId, attachments } = req.body
    const newMessage = new Message({
      sender: req.user.id,
      receiver: receiverId,
      content,
      order: orderId,
      attachments,
    })

    const message = await newMessage.save()
    res.json(message)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get conversation history
 * @param {string} req.params.userId - ID of the other user in conversation
 * Retrieves messages between current user and specified user
 */
exports.getMessages = async (req, res) => {
  try {
    // Find messages where either user is sender or receiver
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user.id },
      ],
    }).sort({ createdAt: 1 })  // Sort by timestamp ascending
    res.json(messages)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

