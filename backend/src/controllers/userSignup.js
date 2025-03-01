import User from "../models/user.js";
import { hash } from "bcrypt";
import { Types } from 'mongoose';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({ msg: "user already exists" });
    }

    const hashedPassword = await hash(password, 10); //10 is salt rounds

    const user = new User({
      _id: new Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
    });

    const result = await user.save();

    console.log(result);
    res.status(200).json({ newUser: result });
  } catch (err) {
    console.log(err)
    res.status(400).json({ message:"Server error", error: err.message })
  }
};

export const getAllUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message:"Server error", error:error.message})
    }
}