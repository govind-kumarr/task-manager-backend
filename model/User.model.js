import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sprints: { type: Array },
});

export const UserModel = mongoose.model("user", UserSchema);

