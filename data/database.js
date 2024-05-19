const mongoDb = require("mongodb");
const MongoClient = mongoDb.MongoClient;
let database;
let mongodbUrl = "mongodb://127.0.0.1:27017";
if (process.env.MONGODB_URL) {
  connectString = process.env.MONGODB_URL;
}
async function getDb() {
  const connect = await MongoClient.connect(mongodbUrl);
  database = connect.db("sdi");
}
function connectDb() {
  if (!database) {
    throw new Error("database not set");
  }
  return database;
}
module.exports = {
  getDb: getDb,
  connectDb: connectDb,
};
