const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/auth", require("./middleware/auth"))
app.use("/api/users", require("./routes/users"))
app.use("/api/gigs", require("./routes/gigs"))
app.use("/api/orders", require("./routes/orders"))
app.use("/api/messages", require("./routes/messages"))
app.use("/api/payments", require("./routes/payments"))
app.use("/api/admin", require("./routes/admin"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

