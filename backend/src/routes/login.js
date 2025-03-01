import { Router } from "express";
const router = Router();
import { findOne } from "../models/user.js";
import { compare } from "bcrypt";

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await findOne({ email }).exec();

    console.log(user);

    if (!user) {
      return res.status(411).json({ msg: "user not found" });
    }

    const decryptPassword = await compare(password, user.password);
    if (decryptPassword) {
      return res.status(200).json({ msg: "successfully logged in" });
    } else return res.status(411).json({ msg: "wrong password" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
