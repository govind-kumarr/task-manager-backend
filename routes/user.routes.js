import { Router } from "express";
import { getUsers, login, signup } from "../controllers/user.controllers.js";

export const UserRouter = Router();

UserRouter.get("/", getUsers);

UserRouter.post("/signup", signup);

UserRouter.post("/login", login);
