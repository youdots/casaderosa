const { chromium } = require("playwright");

module.exports = {
  chromeLaunchConfig: {
    executablePath: chromium.executablePath(),
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
