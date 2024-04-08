const express = require("express");
const router = express.Router();

router.get("/403", function (req, res) {
  res.render("403");
});
module.exports = router;
