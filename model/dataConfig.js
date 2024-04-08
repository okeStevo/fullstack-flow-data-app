const mongodb = require("mongodb");
const db = require("../data/database");
const bcrypt = require("bcryptjs");
class User {
  constructor(email, password, name, number) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.number = number;
  }
  getUserWithSameEmail() {
    return db.connectDb().collection("users").findOne({
      email: this.email,
    });
  }

  static findById(id) {
    return db
      .connectDb()
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(id) });
  }
  userWithSamePassword(hashPass) {
    return bcrypt.compare(this.password, hashPass);
  }
  static async findAll() {
    return db.connectDb().collection("users").find().toArray();
  }
  async save() {
    const hashPassword = await bcrypt.hash(this.password, 12);
    await db.connectDb().collection("users").insertOne({
      email: this.email,
      password: hashPassword,
      name: this.name,
      number: this.number,
    });
  }
}
module.exports = User;
