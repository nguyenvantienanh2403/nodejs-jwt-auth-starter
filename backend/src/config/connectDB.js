import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Kết nối CSDL thành công!");
  } catch (error) {
    console.log("Kết nối CSDL thất bại");
    process.exit(1);
  }
};
