import { Router } from "express";
import { getTasks, postTask } from "../controllers/task.controllers.js";

export const TaskRouter = Router();

TaskRouter.get("/", getTasks);

TaskRouter.post("/", postTask);
