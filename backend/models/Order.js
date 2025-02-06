const mongoose = require("mongoose")

/**
 * Order Schema
 * Defines the structure for order documents in MongoDB
 * Manages transactions between buyers and sellers
 */
const orderSchema = new mongoose.Schema(
  {
    // References to users involved in the transaction
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    // Reference to the gig being ordered
    gig: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig",
      required: true,
    },
    
    // Order status tracking
    status: {
      type: String,
      enum: ["in progress", "completed", "delivered", "cancelled"],
      default: "in progress",
    },
    
    // Pricing information
    pricingTier: {
      type: String,
      enum: ["basic", "standard", "premium"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
    // Delivery information
    deliveryFiles: [String],
    deliveryText: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model("Order", orderSchema)

