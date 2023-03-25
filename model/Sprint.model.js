import mongoose from "mongoose";

const SprintSchema = mongoose.Schema({
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  tasks: { type: Array, required: true },
});

export const SprintModel = mongoose.model("sprint", SprintSchema);
