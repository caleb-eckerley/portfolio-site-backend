const mongoose = require("mongoose");
const Types = require("mongoose").Schema.Types;

const tldr_S = new mongoose.Schema({
  name: { type: Types.String, required: true },
  type: { type: Types.String, required: true },
  show: { type: Types.Boolean, required: true, default: true }
});
//const Tldr = mongoose.model("Tldr", tldr_S);

//Define Project collection schema
const about_S = new mongoose.Schema(
  {
    content: {
      type: Types.String,
      required: true
    },
    chips: [tldr_S]
  },
  { timestamps: true, collection: "about" }
);

module.exports = mongoose.model("About", about_S);
