const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

//Define Project collection schema
const project_S = new mongoose.Schema(
  {
    title: {
      type: Types.String,
      required: true
    },
    description: {
      type: Types.String,
      required: true
    },
    link: {
      type: Types.String,
      required: false
    },
    start_date: {
      type: Types.Date,
      required: false,
      default: new Date()
    },
    skills: [
      {
        type: Types.ObjectId,
        required: false,
        ref: "Chip"
      }
    ],
    status: {
      type: Types.String,
      required: true
    }
  },
  { timestamps: true, collection: "project" }
);

module.exports = mongoose.model("Project", project_S);
