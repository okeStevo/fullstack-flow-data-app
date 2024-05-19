const { MongoClient, ServerApiVersion } = require("mongodb");
let database;
const uri =
  "mongodb+srv://ikuomolaomoniyi:Omoniyisdi@sdi.cochg38.mongodb.net/?retryWrites=true&w=majority&appName=sdi";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
// let mongodbUrl = "mongodb://127.0.0.1:27017";
// if (process.env.MONGODB_URL) {
//   connectString = process.env.MONGODB_URL;
// }
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
  connectDb: run,
};
