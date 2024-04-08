const authJs = require("../util/auth");
const flashDataToAuthPages = require("../util/flash-error");
const checkAdminStatus = require("../util/admin");
const User = require("../model/dataConfig");
const { connectDb } = require("../data/database");
const mongodb = require("mongodb");
async function login(req, res, next) {
  const requestBody = req.body;
  const password = requestBody.password;
  const email = requestBody.email;
  const entered = {
    email: email,
    password: password,
  };

  if (flashDataToAuthPages.flashDataToAuthPages(email, password)) {
    flashDataToAuthPages.sessionError(req, {
      ...entered,
      hasError: true,
      errMessage: `incorrect credentials, 
        check yor crendentials, make sure your 
        password is more than 5 characters and make sure you fill in all inputs!!!`,
    });
    res.redirect("/login");
    return;
  }
  const user = new User(email, password);
  let existsInDatabase;
  try {
    existsInDatabase = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
  }

  if (!existsInDatabase) {
    flashDataToAuthPages.sessionError(req, {
      ...entered,
      hasError: true,
      errMessage: "user does not exist!!",
    });
    res.redirect("/login");
    return;
  }
  let samePassword;
  try {
    samePassword = await user.userWithSamePassword(existsInDatabase.password);
  } catch (error) {
    next(error);
    return;
  }

  if (!samePassword) {
    flashDataToAuthPages.sessionError(req, {
      ...entered,
      hasError: true,
      errMessage: "incorrect password",
    });
    res.redirect("/login");
    return;
  }

  req.session.isAuth = true;
  if (req.session.unView) {
    authJs(req, existsInDatabase, () => {
      res.redirect("/data");
    });
    req.session.unView = false;
    return;
  }
  authJs(req, existsInDatabase, () => {
    res.redirect("/");
  });
}
async function signup(req, res) {
  const requestBody = req.body;
  const name = requestBody.name;
  const password = requestBody.password;
  const email = requestBody.email;
  const phoneNumber = requestBody.number;
  const enteredData = {
    name: name,
    password,
    email: email,
    phoneNumber: phoneNumber,
  };
  if (
    flashDataToAuthPages.signupError(email, password,name, phoneNumber)
  ) {
    console.log("incomplete");
    flashDataToAuthPages.sessionError(req, {
      ...enteredData,
      errMessage: `incorrect credentials, 
      check yor crendentials, make sure your 
      password is more than 5 characters and make sure you fill in all inputs!!!`,
      hasError: true,
    });
    res.redirect("/signup");
    return;
  }
  const user = new User(email, password, name, phoneNumber);
  const existsInDatabase = await user.getUserWithSameEmail();
  if (existsInDatabase) {
    flashDataToAuthPages.sessionError(req, {
      ...enteredData,
      hasError: true,
      errMessage: "user exist already",
    });
    res.redirect("/signup");
    console.log("email");
    return;
  }
  await user.save();
  if (req.session.unView) {
    res.redirect("/data");
    req.session.unView = false;
    return;
  }
  req.session.save(function () {
    res.redirect("/");
  });
}
function logout(req, res) {
  req.session.isAuth = null;
  req.session.uid = null;
  res.redirect("/");
}
async function admin(req, res) {
  const databaseId = await checkAdminStatus.findInDataBaseForAdmin(req);
  connectDb()
    .collection("users")
    .findOne({ _id: new mongodb.ObjectId(req.session.uid) });
  if (!databaseId) {
    res.redirect("/404");
    return;
  }
  const isAdmin = await databaseId.isAdmin;
  if (!isAdmin) {
    res.redirect("/404");
    return;
  }
  const allUsers = await User.findAll();
  res.render("admin/admin", { allUsers: allUsers });
}

module.exports = {
  login: login,
  signup: signup,
  logout: logout,
  admin: admin,
};
