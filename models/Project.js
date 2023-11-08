const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

//Define Project collection schema
const project_S = new mongoose.Schema(
  {
    title: {
      type: Types.String,
      required: true,
    },
    desc: {
      type: Types.String,
      required: true,
    },
    link: {
      type: [Types.ObjectId],
      required: false,
      ref: "Project",
    },
    date: {
      type: Types.Date,
      required: false,
      default: new Date(),
    },
    chip: {
      type: [Types.ObjectId],
      required: false,
      ref: "Chip",
    },
  },
  { timestamps: true, collection: "project" }
);

module.exports = mongoose.model("Project", project_S);
