import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import PhongRoute from "./routes/phongRoute.js";
import UserRouter from "./routes/userRoute.js";

dotenv.config();

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
  });
});

const port = process.env.PORT || 5001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/phong", PhongRoute);
app.use("/api/user", UserRouter);
