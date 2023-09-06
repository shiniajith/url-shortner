const express = require("express");
const { engine } = require("express-handlebars");
const urlRoute = require("./routes/url");
const session = require("express-session");
const Filestore = require("session-file-store")(session);
const fileStoreOptions = {};

const app = express();

app.engine("handlebars", engine());
app.set("views", "views");
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new Filestore(fileStoreOptions),
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", urlRoute);

module.exports = app;
