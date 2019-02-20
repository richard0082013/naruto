const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/getList", (req, res, next) => {
  let list = ["item1", "item2", "item3"];
  res.json(list);
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5001;
app.listen(port);
console.log("App is running on port " + port);
