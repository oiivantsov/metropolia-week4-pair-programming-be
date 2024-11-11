const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES
// GET /Users
router.get("/", getAllUsers);

// POST /Users
router.post("/", createUser);

// GET /Users/:UserId
router.get("/:userId", getUserById);

// PUT /Users/:UserId
router.put("/:userId", updateUser);

// DELETE /Users/:UserId
router.delete("/:userId", deleteUser);

module.exports = router;

