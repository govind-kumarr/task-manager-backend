import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  heading: String,
  type: String,
  desc: String,
  assignee: String,
});

export const Task = mongoose.model("Task", TaskSchema);

/*
{
    id: Math.random().toFixed(5).toString(),
    heading: "Learn React",
    type: "Done",
    desc: "In this generation of technology, software development has been the key to helping businesses thrive and make people’s lives easy.",
    assignee: "Govind",
},
 */
