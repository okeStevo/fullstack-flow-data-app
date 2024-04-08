const {
  contacts,
  contactsPostRoutes,
  contactsGetRoutes,
} = require("../controller/contactscontroller");

const router = require("express").Router();

router.post("/contacts", contactsPostRoutes);
router.get("/contacts", contactsGetRoutes);

module.exports = router;
