const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

//Define Project collection schema
const work_S = new mongoose.Schema(
  {
    title: {
      type: Types.String,
      required: true
    },
    employer: {
      type: Types.String,
      required: true
    },
    start_date: {
      type: Types.Date,
      required: true
    },
    end_date: {
      type: Types.Date,
      required: false
    },
    skills: [
      {
        type: Types.ObjectId,
        required: false,
        ref: "Chip"
      }
    ],
    content: {
      type: Types.String,
      required: true
    }
  },
  { timestamps: true, collection: "work" }
);

module.exports = mongoose.model("Work", work_S);
