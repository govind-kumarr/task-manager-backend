import { Router } from "express";
import { SprintModel } from "../model/Sprint.model.js";

export const SprintRouter = Router();

SprintRouter.get("/", async (req, res, next) => {
  const { userId } = req.body;
  try {
    const sprints = await SprintModel.find({ userId });
    res.send(sprints);
  } catch (error) {
    console.log("Error while fetching sprints\n", error);
    res.send("Something went wrong");
  }
});

SprintRouter.post("/", async (req, res, next) => {
  const data = req.body;
  try {
    const insert = await SprintModel.insertMany([data]);
    console.log("Sprint inserted successfully\n", insert);
    res.send("Data inserted successfully");
  } catch (error) {
    console.log("Error while inserting sprints\n", error);
    res.send("Something went wrong");
  }
});
