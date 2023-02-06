import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  favorites: [
    {
      movieId: Number,
      poster: String,
      title: String,
      catagory: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//hashed user's password before saves
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//check if passwords are matching..
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//genarate user token
userSchema.methods.genarateToken = async function () {
  return jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
};

export const User = mongoose.model("User", userSchema);
