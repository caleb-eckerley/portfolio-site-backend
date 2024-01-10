const express = require("express");
const router = express.Router();
const chipsController = require("../controllers/chipController");

router.route("/").get(chipsController.getAllChips);

module.exports = router;
