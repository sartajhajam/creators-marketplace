const mongoose = require("mongoose")

/**
 * User Schema
 * Defines the structure for user documents in MongoDB
 * Includes authentication, profile, and role information
 */
const userSchema = new mongoose.Schema(
  {
    // Basic user information
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    // User role (buyer, seller, or admin)
    role: { 
      type: String, 
      enum: ["buyer", "seller", "admin"], 
      default: "buyer" 
    },
    
    // Profile information
    bio: String,
    skills: [String],
    portfolio: [String],
    
    // Reviews received by the user
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    
    // Security features
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: String,
    
    // OAuth providers
    googleId: String,   
    facebookId: String,
  },
  { timestamps: true }, // Adds createdAt and updatedAt fields
)

module.exports = mongoose.model("User", userSchema)

