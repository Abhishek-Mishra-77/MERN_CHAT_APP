const express = require("express");
const router = express.Router();

const { registedUser } = require("../controllers/userControllers");

router.post("/", registedUser);

module.exports = router;
