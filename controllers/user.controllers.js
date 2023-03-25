import { UserModel } from "../model/User.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const data = req.body;
  try {
    await UserModel.insertMany([data]);
    res.send("User successfully signed up");
  } catch (error) {
    console.log("Error while signing Up\n", error);
    res.send("Error while signing Up Please try again");
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, password }, "star");
      res.send({
        message: "Successfully signed in",
        token,
      });
    } else
      res.send({
        message: "No Users Found",
      });
  } catch (error) {
    console.log("Error while logging in user\n", error);
    res.send("Error while logging in");
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    console.log("Users found");
    res.send(users);
  } catch (error) {
    console.log("Error while getting users\n", error);
    res.send("No users found");
  }
};
