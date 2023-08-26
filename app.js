const express = require("express");
const { engine } = require("express-handlebars");
const urlRoute = require("./routes/url");

const app = express();

app.engine("handlebars", engine());
app.set("views", "views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", urlRoute);

module.exports = app;
