const Work = require("../models/Work");
const asyncHandler = require("express-async-handler");

/**
 * @Desc Get all work
 * @Route Get /work
 * @Access Private
 **/

const getAllWork = asyncHandler(async (req, res) => {
  const work = await Work.find({}).select(["_id", "title", "employer", "start_date", "end_date", "content", "skills"]).populate("skills").lean();

  if (!work?.length) {
    return res.status(400).json({ message: "No work found" });
  }
  res.json(work);
});

module.exports = {
  getAllWork
};
