const randomstring = require("randomstring");
const UrlModel = require("../models/UrlModel");

async function getNewKey() {
  let newKey = randomstring.generate(10);
  let url = await fetchUrlByKey(newKey);
  while (url) {
    newKey = randomstring.generate(10);
    url = await fetchUrlByKey(newKey);
  }
  return newKey;
}

async function createNewURL(url) {
  const urlObj = getUrlByOrginalUrl(url);
  if (urlObj) {
    return urlObj;
  }

  const newKey = getNewKey();

  const data = {
    orginalUrl: url,
    key: newKey,
  };

  const newUrl = await UrlModel.create(data);

  return newUrl;
}

async function getUrlByOrginalUrl(url) {
  const urlObj = await UrlModel.findOne({
    where: {
      orginalUrl: url,
    },
  });
  return urlObj;
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
