const mongoDb = require("mongodb");
const MongoClient = mongoDb.MongoClient;
let database;
let mongoDbUrl = "mongodb://127.0.0.1:27017";
if (process.env.mongoDb_url) {
  connectString = process.env.mongoDb_url;
}
async function getDb() {
  const connect = await MongoClient.connect(mongoDbUrl);
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
