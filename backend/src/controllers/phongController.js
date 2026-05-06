import express from "express";
import Phong from "../models/phongModel.js";

export const getAllPhong = async (req, res) => {
  try {
    const getAllPhong = await Phong.find();
    res.status(200).json(getAllPhong);
  } catch (error) {
    console.log("Lỗi lấy dữ liệu getAllPhong", error);
    res.status(500).json({ message: "Lỗi hệ thống!" });
  }
};

export const createPhong = async (req, res) => {
  try {
    const { tenphong } = req.body;
    const phong = new Phong({ tenphong });
    const newphong = await phong.save();
    res.status(201).json(newphong);
  } catch (error) {
    console.log("Lỗi lấy dữ liệu createPhong", error);
    res.status(500).json({ message: "Lỗi hệ thống!" });
  }
};

export const updatePhong = async (req, res) => {
  try {
    const { tenphong, trangthai, lapngay } = req.body;
    const newPhong = await Phong.findByIdAndUpdate(
      req.params.id,
      { tenphong, trangthai, lapngay },
      { new: true },
    );
    res.status(200).json(newPhong);
  } catch (error) {
    console.log("Lỗi lấy dữ liệu updatePhong", error);
    res.status(500).json({ message: "Lỗi hệ thống!" });
  }
};

export const deletePhong = async (req, res) => {
  try {
    const xoaPhong = await Phong.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Xóa thành công" });
  } catch (error) {
    console.log("Lỗi lấy dữ liệu deletePhong", error);
    res.status(500).json({ message: "Lỗi hệ thống!" });
  }
};
