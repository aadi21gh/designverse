import Product from "../models/Product.js";

// ================= GET ALL PRODUCTS =================
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      status: "active",
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ================= GET PRODUCTS BY CATEGORY =================
export const getProductsByCategory = async (
  req,
  res
) => {
  try {
    const { category } = req.params;

    const products = await Product.find({
      category,
      status: "active",
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ================= GET PRODUCT BY ID =================
export const getProductById = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};