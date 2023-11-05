require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const { mongoClient, serverApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const { connectDB } = require("./config/databaseConnect");

const PORT = process.env.OUT_PORT;

connectDB();

/* ------End imports------ */

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/landing"));

mongoose.connection.once("open", function () {
  console.log("connected to MongoDB");
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Running on port ${PORT}\nhttp://localhost:${PORT}`);
  });
});

mongoose.connection.on("error", function (err) {
  console.log(err);
});
