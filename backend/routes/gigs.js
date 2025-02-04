const express = require("express")
const router = express.Router()
const auth = require("../middleware/adminAuth")
const { createGig, getGigs, getGig, updateGig, deleteGig } = require("../controllers/gigController")

router.post("/", auth, createGig)
router.get("/", getGigs)
router.get("/:id", getGig)
router.put("/:id", auth, updateGig)
router.delete("/:id", auth, deleteGig)

module.exports = router

