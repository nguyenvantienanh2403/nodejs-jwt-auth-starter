import express from "express";
import { createUserService } from "../services/userService.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await createUserService(name, email, password);
  res.status(201).json(data);
};
