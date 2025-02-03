const mongoose = require("mongoose")

const gigSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: String,
    pricingTiers: {
      basic: {
        price: Number,
        description: String,
      },
      standard: {
        price: Number,
        description: String,
      },
      premium: {
        price: Number,
        description: String,
      },
    },
    images: [String],
    video: String,
    status: {
      type: String,
      enum: ["active", "pending", "draft"],
      default: "draft",
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("Gig", gigSchema)

