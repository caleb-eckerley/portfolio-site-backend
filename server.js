require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const { mongoClient, serverApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const { connectDB } = require("./config/databaseConnect");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const { eventLogger, logger } = require("./middleware/eventLogger");
const errorLogger = require("./middleware/errorLogger");

const PORT = process.env.OUT_PORT;

/* ------End imports------ */

connectDB();

app.use(eventLogger);
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/landing"));

app.use("/projects", require("./routes/projectRoutes.js"));

app.use("/chips", require("./routes/chipRoutes.js"));

app.use("/work", require("./routes/workRoutes.js"));

app.use("/about", require("./routes/aboutRoutes.js"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Running on port ${PORT}\nhttp://localhost:${PORT}`);
  });
});

app.use(errorLogger);

mongoose.connection.on("error", function (err) {
  logger(`${err.errno}: ${err.code}\t${err.syscall}\t${err.hostname}`, process.env.MONGO_ERROR_LOG_FILENAME);
});
