const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  registedUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

router.post("/", registedUser);
router.get("/", protect, allUsers);
router.post("/login", authUser);

module.exports = router;
