import { Schema, model } from "mongoose";

//Define Project collection schema
const project_S = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    link: {
      type: [project_S],
      required: false,
    },
    date: {
      type: Schema.Types.Date,
      required: true,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export default model("Project", project_S);
