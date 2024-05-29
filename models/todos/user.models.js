import mongoose from "mongoose";

const userSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
  },{timestamps:true}
);

export const USer = mongoose.model("User",userSchema);