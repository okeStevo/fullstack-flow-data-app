const express = require("express");
const {
  russelGetDataFromjs,
  russelGetRoutes,
} = require("../controller/russelCON");
const router = express.Router();
router.post("/russelFetch", russelGetDataFromjs);
router.get("/russel", russelGetRoutes);

module.exports = router;
