const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

const chip_S = new mongoose.Schema(
  {
    name: {
      type: Types.String,
      required: true
    },
    type: {
      type: Types.String,
      required: true
    }
  },
  { timestamps: true, collection: "chip" }
);

module.exports = mongoose.model("Chip", chip_S);
