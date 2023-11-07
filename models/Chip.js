import { Schema, model } from "mongoose";

const chip_S = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: Schema.Types.String,
      required: true,
    },
    color_code: {
      type: Schema.Types.Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = model("Chip", chip_S);
