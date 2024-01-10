const Chip = require("../models/Chip");
const asyncHandler = require("express-async-handler");

/**
 * @Desc Get all chips
 * @Route Get /chips
 * @Access Private
 **/

const getAllChips = asyncHandler(async (req, res) => {
  const chips = await Chip.find({}).select(["_id", "name", "type"]).lean();

  if (!chips?.length) {
    return res.status(400).json({ message: "No chips found" });
  }
  res.json(chips);
});

module.exports = {
  getAllChips
};
