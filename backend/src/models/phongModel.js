import mongoose from "mongoose";

const phongSchema = mongoose.Schema(
  {
    tenphong: {
      type: String,
      required: true,
      trim: true,
    },
    trangthai: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    lapngay: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Phong = mongoose.model("Phong", phongSchema);
export default Phong;
