import { Router } from "express";
const router = Router();
import ContactUs from "../models/contactUs.js";

router.post('/:id', async (req,res,next) => {
  try {
    // user enters this data
    const userId = req.params.id
    const { name, email, message } = req.body;

    const contactData = new ContactUs({
      _id:userId,
      name:name,
      email:email,
      message:message
    })

    const result = await contactData.save();
    console.log(result)
    res.status(200).json({newUser : result})
  } catch(error) {
    console.log(error)
    res.status(400).json({ error: error.message})
  }
})
export default router;
