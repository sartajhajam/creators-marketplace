const Gig = require("../models/Gig")

/**
 * Controller for managing gig operations
 * Handles CRUD operations for service listings
 */

/**
 * Create new gig
 * @param {Object} req - Request object with gig details and authenticated user
 * @param {Object} res - Response object
 */
exports.createGig = async (req, res) => {
  try {
    // Create new gig with seller ID from authenticated user
    const newGig = new Gig({
      ...req.body,
      seller: req.user.id,
    })

    const gig = await newGig.save()
    res.json(gig)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get all gigs
 * Retrieves all gigs with seller information
 */
exports.getGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().populate("seller", "name")
    res.json(gigs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Get single gig by ID
 * @param {string} req.params.id - Gig ID
 */
exports.getGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id).populate("seller", "name")
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }
    res.json(gig)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Update gig
 * @param {string} req.params.id - Gig ID
 * Only allows seller who created the gig to update it
 */
exports.updateGig = async (req, res) => {
  try {
    let gig = await Gig.findById(req.params.id)
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

    // Verify gig ownership
    if (gig.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" })
    }

    gig = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(gig)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

/**
 * Delete gig
 * @param {string} req.params.id - Gig ID
 * Only allows seller who created the gig to delete it
 */
exports.deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id)
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

    // Verify gig ownership
    if (gig.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" })
    }

    await gig.remove()
    res.json({ message: "Gig removed" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

