const { connectDb } = require("../data/database");

class Contacts {
  constructor(message) {
    this.message = message;
  }
  async save() {
    await connectDb().collection("contacts").insertOne({
      message: this.message,
    });
  }
}
module.exports = Contacts;
