const express = require('express');
const router = express.Router()
const logAndSignGet = require("../controller/log-ang-sign.get.con")
router.get("/login", logAndSignGet.getLogin)
router.get("/signup", logAndSignGet.getSignup)
module.exports = router