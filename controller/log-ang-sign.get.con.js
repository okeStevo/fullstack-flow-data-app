function getSignup(req, res) {
  let inputData = req.session.inputData;
  if (!inputData) {
    inputData = {
      hasError: false,
      name: "",
      email: "",
      number: "",
    };
  }
  req.session.inputData = null;
  res.render("auth/signup", { inputData: inputData });
}
function getLogin(req, res) {
  let inputData = req.session.inputData;
  if (!inputData) {
    inputData = {
      hasError: false,
      name: "",
      email: "",
      number: "",
    };
  }
  req.session.inputData = null;
  res.render("auth/login", { inputData: inputData });
}
module.exports = {
  getLogin: getLogin,
  getSignup: getSignup,
};
