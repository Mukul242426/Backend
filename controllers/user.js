import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorHandler } from "../middlewares/error.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user)
    if(!user){
      return next({
        statusCode:401,
        message:"Invalid email or password"
      })
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return next({
        statusCode:401,
        message:"Invalid email or password"
      })
    }
    const jwtToken=jwt.sign(user.toJSON(),process.env.SECRET_KEY,{expiresIn:'1m'})
    res.status(200).json({
      status:true,
      message:"Login Successfull",
      jwtToken
    })
    console.log(jwtToken)
  } catch (error) {
    console.log(error)
  }
};

export const signup = async (req, res, next) => {
  const { fullName, email, password, age, gender, mobile } = req.body;

  try {
    let user = await User.findOne({ $or: [{ email }, { mobile }] });

    if (user) {
      return next({
        statusCode: 201,
        message: "User already exists with the given email or mobile",
      });
    }
    const protectPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      fullName,
      email,
      password: protectPassword,
      age,
      gender,
      mobile,
    });
    const jwtToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
      expiresIn: "1m",
    });

    res.json({
      status: "SUCCESS",
      message: "Signup Successfull",
      jwtToken,
    });
  } catch (error) {
    console.log(error);
  }
};

export const notFound = (req, res, next) => {
  return next({
    statusCode: 404,
    message: "Route not found",
  });
};
