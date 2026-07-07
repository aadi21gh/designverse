import express from "express";

import {
  getProducts,
  getProductsByCategory,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/id/:id", getProductById);

router.get("/:category", getProductsByCategory);

export default router;