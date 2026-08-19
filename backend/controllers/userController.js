import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({
        success: false,
        message: "user not exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({
        success: false,
        message: "invalid credentials",
      });
    }
    const token = createToken(user._id);
    res.json({
        success:true,
        token
    })
  } catch (err) {
    console.log(err);
    res.json({
        success:false,
        message:"Error"
    })
  }
};
// create token to send to user
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// register user
const registerUser = async (req, res) => {
  //destructure body data
  const { name, email, password } = req.body;
  try {
    // check if user already exist
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "user already exists",
      });
    }
    // validate email format and strong password
    if (validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "plase enter valid email",
      });
    }
    // check password length greater then 8 char
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user and save
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export default user;
