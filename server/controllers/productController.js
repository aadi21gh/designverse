const Product = require("../models/Product");

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      status: "active",
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// GET PRODUCTS BY CATEGORY
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({
      category,
      status: "active",
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};