const randomstring = require("randomstring");
const UrlModel = require("../models/UrlModel");

async function createNewURL(url) {
  const key = randomstring.generate(10);
  const data = {
    orginalUrl: url,
    key: key,
  };

  const newUrl = await UrlModel.create(data);

  return newUrl;
}

async function fetchUrlByKey(key) {
  const url = await UrlModel.findOne({
    where: {
      key: key,
    },
  });
  return url;
}

module.exports = {
  createNewURL,
  fetchUrlByKey,
};
