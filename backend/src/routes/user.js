import { Router } from "express";
const router = Router();
import { Types } from "mongoose";
import User, { find, findOne, findById } from "../../src/models/user.js";
import { hash } from "bcrypt";

router.get("/", (req, res, next) => {
  find()
    .then((result) => {
      res.status(200).json({
        userData: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findOne({ email }).exec();
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

    const result = await user.get();

    console.log(result);
    res.status(200).json({ newUser: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//get data by id
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

export default router;
