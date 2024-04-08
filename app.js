const express = require("express");
const app = express();
const routes = require("./routes/routes");
const db = require("./data/database");
const session = require("express-session");
const mongodbstore = require("connect-mongodb-session");
const authRoutes = require("./routes/auth.routes");
const sheetRoute = require("./routes/sheet.routes");
const getLogAndSign = require("./routes/log-ang-sign.get.routes");
const checkAuthStatus = require("./middleware/checkauthstatus");
const baseRoutes = require("./routes/base.routes");
const contsctsRoutes = require("./routes/contact.routes");
const serverSideErrorHandler = require("./middleware/server.error");
const csrf = require("csurf");
const createCsrfToken = require("./middleware/csrftoken");
const MongoDBStore = mongodbstore(session);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "sdi",
  collection: "session",
});
app.set("views", "views");
app.set("view engine", "ejs");
app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(csrf());
app.use(createCsrfToken);
app.use(checkAuthStatus);
app.use(baseRoutes);
app.use(authRoutes);
app.use(getLogAndSign);
app.use(routes);
app.use(sheetRoute);
app.use(contsctsRoutes);
app.use("/", function (req, res, next) {
  res.render("404");
  next();
});
app.use(serverSideErrorHandler);
db.getDb()
  .then(function () {
    app.listen(4000);
  })
  .catch(function (next) {
    next(error);
  });
