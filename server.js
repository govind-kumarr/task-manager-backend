import { config } from "dotenv";
import express from "express";
import { makeConnection } from "./db/db.js";
import { SprintRouter } from "./routes/sprint.routes.js";
import { TaskRouter } from "./routes/task.routes.js";
import { UserRouter } from "./routes/user.routes.js";
config();

const app = express();
app.use(express.json());

app.use("/user", UserRouter);

app.use("/sprints", SprintRouter);

app.use("/tasks", TaskRouter);

makeConnection(() =>
  app.listen(process.env.port, () => {
    console.log("App is listening on port " + process.env.port);
  })
);
