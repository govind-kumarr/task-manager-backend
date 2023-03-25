import { Task } from "../model/Task.model.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send("Error while fetching tasks");
  }
};

export const postTask = async (req, res) => {
  const task = req.body;
  console.log(task);
  try {
    res.send(task);
  } catch (error) {}
};
