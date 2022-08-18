import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Starting app with async local storage on port ${port}`);
  console.log(`Example app listening on port ${port}`);
});
