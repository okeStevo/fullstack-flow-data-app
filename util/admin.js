const db = require("../data/database");
const mongodb = require("mongodb")
function findInDataBaseForAdmin(req) {
  const idOf = new mongodb.ObjectId(req.session.uid);
  return db.connectDb().collection("users").findOne({ _id: idOf });
}
//dhsouhugiudgfduiug

module.exports = {
  findInDataBaseForAdmin: findInDataBaseForAdmin,
};
