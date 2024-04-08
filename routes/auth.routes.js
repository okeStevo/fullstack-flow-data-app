const express = require("express");
const router = express.Router();
const authRoutes = require("../controller/auth-controller")

router.post("/login", authRoutes.login)
router.post("/signup", authRoutes.signup)
router.post("/logout", authRoutes.logout)
router.get("/admin", authRoutes.admin)
module.exports = router;