const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

/**
 * Main Server Configuration
 * Sets up Express server with middleware and routes
 * Connects to MongoDB database
 */

// Load environment variables
dotenv.config()

const app = express()

// Middleware Configuration
app.use(cors())  // Enable CORS for all routes
app.use(express.json())  // Parse JSON request bodies

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// API Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/users", require("./routes/users"))
app.use("/api/gigs", require("./routes/gigs"))
app.use("/api/orders", require("./routes/orders"))      
app.use("/api/messages", require("./routes/messages"))
app.use("/api/payments", require("./routes/payments"))
app.use("/api/admin", require("./routes/admin"))

// Server Initialization
const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

