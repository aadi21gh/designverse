require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Canvas",
    category: "Artwork",
    basePrice: 799,
  },
  {
    name: "Poster",
    category: "Artwork",
    basePrice: 399,
  },
  {
    name: "Framed Art",
    category: "Artwork",
    basePrice: 999,
  },
  {
    name: "Regular T-Shirt",
    category: "Clothing",
    basePrice: 599,
  },
  {
    name: "Oversized T-Shirt",
    category: "Clothing",
    basePrice: 699,
  },
  {
    name: "Hoodie",
    category: "Clothing",
    basePrice: 1299,
  },
  {
    name: "Phone Case",
    category: "Accessories",
    basePrice: 499,
  },
  {
    name: "Mug",
    category: "Accessories",
    basePrice: 399,
  },
  {
    name: "Tote Bag",
    category: "Accessories",
    basePrice: 699,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.deleteMany();

    console.log("Old Products Deleted");

    await Product.insertMany(products);

    console.log("Products Inserted Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
}

seedDatabase();