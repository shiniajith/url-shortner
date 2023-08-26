const express = require("express");
const urlRoute = express.Router();
const urlService = require("../services/urlService");

urlRoute.get("/", async (req, res) => {
  const newUrl = req.query.newUrl;
  res.render("home", { newUrl: newUrl });
});
urlRoute.post("/create-url", async (req, res) => {
  const url = req.body.url;
  const newUrl = await urlService.createNewURL(url);
  res.redirect(`/?newUrl=${newUrl.key}`);
});
urlRoute.get("/url/:key", async (req, res) => {
  const key = req.params.key;
  const url = await urlService.fetchUrlByKey(key);
  if (url === null) {
    return res.render("invalidUrl");
  }
  res.redirect(url.orginalUrl);
});

module.exports = urlRoute;
