const Gig = require("../models/Gig")

exports.createGig = async (req, res) => {
  try {
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

exports.getGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().populate("seller", "name")
    res.json(gigs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

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

exports.updateGig = async (req, res) => {
  try {
    let gig = await Gig.findById(req.params.id)
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

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

exports.deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id)
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

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

