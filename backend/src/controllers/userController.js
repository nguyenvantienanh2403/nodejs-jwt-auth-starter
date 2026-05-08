import express from "express";
import {
  createUserService,
  loginUserService,
} from "../services/userService.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await createUserService(name, email, password);
  res.status(201).json(data);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginUserService(email, password);
  res.status(200).json(data);
};
