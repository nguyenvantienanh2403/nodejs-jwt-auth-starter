import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;

export const createUserService = async (name, email, password) => {
  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const loginUserService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return {
          EC: 2,
          EM: "Email/Password không hợp lệ!",
        };
      } else {
        const payload = {
          name: user.name,
          email: user.email,
        };
        console.log(process.env.JWT_SECRET);
        const access_token = await jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        return {
          access_token,
          EC: 0,
          EM: "Login thành công!",
        };
      }
    } else {
      return {
        EC: 1,
        EM: "Email/Password không hợp lệ!",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Lỗi đăng nhập",
    };
  }
};
