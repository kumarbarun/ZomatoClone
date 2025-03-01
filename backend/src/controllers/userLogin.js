import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const loggedIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // if email match then store in user in 
        const user = await User.findOne({email}).exec();
        if (!user) {
            return res.status(404).json({ msg: "user not found" });
          }

        const decryptPassword = await bcrypt.compare(password, user.password);
        if (decryptPassword) {
            return res.status(200).json({ msg: "successfully logged in" });
          } else return res.status(400).json({ msg: "wrong password" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}