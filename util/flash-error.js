function flashDataToAuthPages(email, password) {
  return (
    !email || !email.includes("@") || password.trim().length < 5 || !password
  );
}
function signupError(email, password, name, phoneNumber) {
  return (
    !email ||
    !password ||
    !name ||
    !phoneNumber ||
    !email.includes("@") ||
    password.trim().length < 5
  );
}
function sessionError(req, data, action) {
  req.session.inputData = data;
  // the data is an object that holds all the temporary data
}
module.exports = {
  flashDataToAuthPages: flashDataToAuthPages,
  sessionError: sessionError,
  signupError: signupError,
};
