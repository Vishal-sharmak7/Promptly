import { greetOnMail } from "../middlewares/nodemailer.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//user register
const userRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Check required fields
    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashpassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, name, password: hashpassword });
    const savedUser = await newUser.save();

    // Send welcome email
    greetOnMail({ name, email });

    // Create JWT token
    const token = jwt.sign(
      { email: savedUser.email, _id: savedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Respond with success
    return res.status(201).json({
      success: true,
      token,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


//user Login
/** jwt, bcrypt,  joi validation */
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not found, please register" });
    }

    const decryptpass = await bcrypt.compare(password, user.password);
    if (!decryptpass) {
      return res
        .status(400)
        .json({ success: false, message: "Email or password is incorrect" });
    }

    const token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login Successfully",
      success: true,
      token,
      email,
      name: user.name,
      
    });
  } catch (error) {
    res.status(400).json({ message: "server error" }, error);
  }
};

export default { userRegister, userLogin };
