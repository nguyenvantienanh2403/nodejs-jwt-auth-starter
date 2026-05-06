import express from "express";
import {
  createPhong,
  deletePhong,
  getAllPhong,
  updatePhong,
} from "../controllers/phongController.js";

const router = express.Router();

router.get("/", getAllPhong);
router.post("/", createPhong);
router.put("/:id", updatePhong);
router.delete("/:id", deletePhong);

export default router;
