import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import designRoutes from "./routes/designRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("🚀 DesignVerse Backend Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/designs", designRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});