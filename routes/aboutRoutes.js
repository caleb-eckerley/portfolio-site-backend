const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

router.route("/").get(aboutController.getAllAbout);

module.exports = router;
