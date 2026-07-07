import mongoose from "mongoose";

const elementSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    type: String,

    x: Number,
    y: Number,

    width: Number,
    height: Number,

    rotation: Number,

    opacity: {
      type: Number,
      default: 1,
    },

    visible: {
      type: Boolean,
      default: true,
    },

    locked: {
      type: Boolean,
      default: false,
    },

    zIndex: Number,

    text: String,
    fontSize: Number,
    fontFamily: String,
    color: String,

    src: String,

    fill: String,
  },
  {
    _id: false,
  }
);

const designSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    title: {
      type: String,
      required: true,
      default: "Untitled Design",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    canvas: {
      width: {
        type: Number,
        default: 450,
      },

      height: {
        type: Number,
        default: 600,
      },

      zoom: {
        type: Number,
        default: 1,
      },

      background: {
        type: String,
        default: "",
      },
    },

    elements: [elementSchema],

    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Design",
  designSchema
);