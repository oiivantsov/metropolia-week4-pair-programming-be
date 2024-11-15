const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES
// GET /tours
router.get("/", getAllTours);

const auth = require('../middleware/auth');
router.use(auth);

// POST /tours
router.post("/", createTour);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;

