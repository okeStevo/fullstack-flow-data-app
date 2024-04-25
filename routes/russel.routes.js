const express = require("express");
const {
  russelGetDataFromjs,
  russelGetRoutes,
  russelDownload,
} = require("../controller/russelCON");
const router = express.Router();
router.post("/russelFetch", russelGetDataFromjs);
router.get("/russel", russelGetRoutes);
router.post("/russelDownload", russelDownload);

module.exports = router;
