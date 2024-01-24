const About = require("../models/About");
const asyncHandler = require("express-async-handler");

/**
 * @Desc Get all personal info
 * @Route Get /about
 * @Access Private
 **/

const getAllAbout = asyncHandler(async (req, res) => {
  const about = await About.find({}).select(["_id", "content", "tldr"]).lean();

  if (!about?.length) {
    return res.status(400).json({ message: "No about information found" });
  }
  res.json(about);
});

module.exports = {
  getAllAbout
};
