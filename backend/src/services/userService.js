import User from "../models/userModel.js";
import bcrypt from "bcrypt";
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
