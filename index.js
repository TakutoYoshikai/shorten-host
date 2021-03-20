
module.exports = function(baseUrl) {
  const express = require("express");
  const app = express();
  app.get("/*", (req, res) => {
    const path = req.originalUrl;
    res.status(301).redirect(baseUrl + path);
  });
  app.listen(80);
}
