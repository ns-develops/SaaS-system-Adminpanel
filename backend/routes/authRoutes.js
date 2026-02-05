const express = require("express");
const { registerUSer, loginUser, getUSerProfile, updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUSer);
router.post("/login", loginUser);
router.get("/profile", protect, getUSerProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;