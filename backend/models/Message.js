const mongoose = require("mongoose")

/**
 * Message Schema
 * Handles communication between users
 * Supports text messages and file attachments
 */
const messageSchema = new mongoose.Schema(
  {
    // Message participants
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Message content
    content: {
      type: String,
      required: true,
    },

    // Optional reference to related order
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    // File attachments (array of URLs)
    attachments: [String],
  },
  { timestamps: true }  // Adds createdAt and updatedAt fields
)

module.exports = mongoose.model("Message", messageSchema)

