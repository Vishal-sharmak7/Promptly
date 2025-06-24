import { greetOnMail } from "../middlewares/nodemailer.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, name, password: hashpassword });
    const savedUser = await newUser.save();

    greetOnMail({ name, email });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "user not found, please register" });
  }

  const decryptpass = await bcrypt.compare(password , user.password)
  if (decryptpass) {
      return res
      .status(400)
      .json({ success: false, message: "Email or password is incorrect" });
  }
};

export default { userRegister, userLogin };
