const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

const chip_S = new mongoose.Schema(
  {
    name: {
      type: Types.String,
      required: true,
    },
    category: {
      type: Types.String,
      required: true,
    },
    color_code: {
      type: Types.Number,
      required: false,
      default: 1,
    },
  },
  { timestamps: true, collection: "chip" }
);

module.exports = mongoose.model("Chip", chip_S);
