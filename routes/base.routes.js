const express = require("express");
const router = express.Router();
const baseRoutes = require("../controller/base.controller");
router.get("/", baseRoutes.inndexRoutes)
router.get("/data", baseRoutes.dataGetRoutes);
router.get("/monitor", baseRoutes.monitorGetRoutes);
router.get("/confirm", baseRoutes.confirmGetRoutes);

module.exports = router;
