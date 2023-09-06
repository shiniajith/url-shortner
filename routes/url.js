const express = require("express");
const urlRoute = express.Router();
const urlService = require("../services/urlService");

urlRoute.get("/", async (req, res) => {
  const newUrl = req.session.urlInfo;
  delete req.session.urlInfo;
  res.render("home", { newUrl: newUrl });
});

urlRoute.post("/create-url", async (req, res) => {
  const orginalUrl = req.body.orginalUrl;
  const newUrl = await urlService.createNewURL(orginalUrl);
  req.session.urlInfo = {
    orginalUrl: newUrl.orginalUrl,
    key: newUrl.key,
  };
  await req.session.save(() => {
    res.redirect("/");
  });
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
