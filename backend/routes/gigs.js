const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { createGig, getGigs, getGig, updateGig, deleteGig } = require("../controllers/gigController")

/**
 * Gig Routes
 * Handles service listing operations
 * Create/Update/Delete operations require authentication
 */

// @route   POST api/gigs
// @desc    Create a new gig
// @access  Private (Sellers only)
router.post("/", auth, createGig)

// @route   GET api/gigs
// @desc    Get all gigs
// @access  Public
router.get("/", getGigs)

// @route   GET api/gigs/:id
// @desc    Get gig by ID
// @access  Public
router.get("/:id", getGig)

// @route   PUT api/gigs/:id
// @desc    Update gig
// @access  Private (Seller only)
router.put("/:id", auth, updateGig)

// @route   DELETE api/gigs/:id
// @desc    Delete gig
// @access  Private (Seller only)
router.delete("/:id", auth, deleteGig)

module.exports = router

