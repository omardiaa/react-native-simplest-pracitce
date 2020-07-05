const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri =
  "mongodb+srv://user:ZOV0L3ADyE6n42dG@cluster0.mea1a.mongodb.net/practice1?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("connected", () => {
    console.log("Connected successfully to database!");
  })
  .catch((err) => {
    console.log("Error while connecting to database. Error: " + err);
  });

const router = require("./routing/schema1");
app.use("/database", router);

app.listen(3000, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
  res.send("Hello from node js");
});

// Pass: ZOV0L3ADyE6n42dG
// Username: user
// dbname: practice1
