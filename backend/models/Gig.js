const mongoose = require("mongoose")

/**
 * Gig Schema
 * Represents a service listing that sellers can create
 * Includes pricing tiers, media content, and status management
 */
const gigSchema = new mongoose.Schema(
  {
    // Reference to the seller who created the gig
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Basic gig information
    title: { type: String, required: true },
    description: { type: String, required: true },
    
    // Categorization
    category: { type: String, required: true },
    subcategory: String,

    // Pricing structure with three tiers
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

    // Media content
    images: [String],  // Array of image URLs
    video: String,     // Video URL

    // Gig visibility status
    status: {
      type: String,
      enum: ["active", "pending", "draft"],
      default: "draft",
    },
  },
  { timestamps: true },  // Adds createdAt and updatedAt fields
)

module.exports = mongoose.model("Gig", gigSchema)

