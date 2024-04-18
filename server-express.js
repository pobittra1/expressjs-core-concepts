const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({ name: "pobi", surname: "pobittra" });
});
app.get("/home", (req, res) => {
  res.send("this is home");
});

app.get("/posts", (req, res) => {
  res.send("this is posts");
});

app.listen(5000, () => {
  console.log(`server listening on port ${port}`);
});
