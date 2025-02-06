const User = require("../models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * User Registration Controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * Handles new user registration with password hashing and JWT token generation
 */
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    // Check if user already exists
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    })

    await user.save()

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    }

    // Generate and return JWT token
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err
      res.json({ token })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * User Login Controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * Authenticates user and returns JWT token
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    }

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err
      res.json({ token })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

