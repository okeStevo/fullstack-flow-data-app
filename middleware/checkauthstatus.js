const db = require("../data/database");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
async function checkAuthStatus(req, res, next) {
  const isAuththenticated = req.session.isAuth;
  res.locals.isAuth = isAuththenticated;
  if (!isAuththenticated) {
    return next();
  }
  let similarId;
  try {
    similarId = await db
      .connectDb()
      .collection("users")
      .findOne({ _id: new ObjectId(req.session.uid) });
  } catch (error) {
    next(error);
  }
  if (!similarId) {
    return next();
  }
  const userIsAdmin = similarId.isAdmin;
  if (!userIsAdmin) {
    return next();
  }
  res.locals.isAdmin = userIsAdmin
  next();
}
module.exports = checkAuthStatus;
