const express = require("express");
const router = express.Router();
const workController = require("../controllers/workController");

router.route("/").get(workController.getAllWork);

module.exports = router;
