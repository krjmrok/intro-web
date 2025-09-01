const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("http://localhost:3000 でサーバー起動中");
});

app.get("/top", (req, res) => {
  res.render(`index.html`);
});