import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = new mongoose.model("User", userSchema);

export default UserModel;
