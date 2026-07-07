import express from "express";

import {
  createDesign,
  getMyDesigns,
  getDesign,
  updateDesign,
  deleteDesign,
} from "../controllers/designController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createDesign);

router.get("/", getMyDesigns);

router.get("/:id", getDesign);

router.put("/:id", updateDesign);

router.delete("/:id", deleteDesign);

export default router;