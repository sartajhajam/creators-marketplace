const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["buyer", "seller", "admin"], default: "buyer" },
    bio: String,
    skills: [String],
    portfolio: [String],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: String,
    googleId: String,
    facebookId: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model("User", userSchema)

