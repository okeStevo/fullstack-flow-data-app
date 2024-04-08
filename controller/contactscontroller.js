const Contacts = require("../model/contacts");

async function contactsPostRoutes(req, res) {
  console.log(req.body)
  const message = req.body.message;
  if (!message) {
    console.log("invalid input")
    req.session.contactError = {
      hasError: true,
      text: `invalid message, please enter a valid text`,
      message: message,
    };
    res.redirect("/contacts");
    return;
  }
  const contact = new Contacts(req.body.message);
  await contact.save();
  res.redirect("/");
}
function contactsGetRoutes(req, res) {
    res.render("base/contacts");
  }
module.exports = {
  contactsPostRoutes: contactsPostRoutes,
  contactsGetRoutes:contactsGetRoutes
};
