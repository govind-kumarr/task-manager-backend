import { config } from "dotenv";
import mongoose from "mongoose";
config();

export const makeConnection = async (cb) => {
  try {
    await mongoose.connect(process.env.url);
    console.log("Connection established to the database");
    cb();
  } catch (error) {
    console.log("Error connecting to the database");
  }
};
