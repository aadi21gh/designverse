import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Artwork",
        "Clothing",
        "Accessories",
      ],
    },

    basePrice: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    customizable: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: [
        "active",
        "inactive",
      ],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Product",
  productSchema
);