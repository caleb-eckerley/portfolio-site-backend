const express = require("express");
const path = require("path");
const PORT = 3500;

const app = express();

/* ------End imports------ */

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/landing"));

app.listen(PORT, () =>
  console.log(`Running on port ${PORT}\nhttp://localhost:${PORT}`)
);
