
import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedOtp: String,
  },
  {
    timestamps: true,
  }
);

export const User =mongoose.model("User", userModel)

