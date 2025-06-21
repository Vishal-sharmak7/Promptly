
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.ststus(400).json({ success: false, message: "Auth Fail" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "user already exist" });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword);
    
    const newUser = new User({
      email,
      name,
      password:hashpassword,
    
    });
    await newUser.save();
  
    res.status(201).json({ message: "user register successfully" ,newUser});
  } catch (error) {}

  return res.status(500).json({ message: "server error" });
};

export default userRegister;
