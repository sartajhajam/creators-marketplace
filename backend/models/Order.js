const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
  {
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
    gig: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig",
      required: true,
    },
    status: {
      type: String,
      enum: ["in progress", "completed", "delivered", "cancelled"],
      default: "in progress",
    },
    pricingTier: {
      type: String,
      enum: ["basic", "standard", "premium"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryFiles: [String],
    deliveryText: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model("Order", orderSchema)

