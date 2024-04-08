const express = require("express");
const router = express.Router();
const sheetController = require("../controller/sheet.controller");
router.post("/sheet", sheetController.getSheet);
router.get("/download", sheetController.download);
router.get("/russel", sheetController.russel);

module.exports = router;
