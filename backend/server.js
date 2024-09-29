const express = require("express");
const app = express();
//Connect to mongodb database(locally)
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const userData = require("./models/userDataModel");

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(4000);