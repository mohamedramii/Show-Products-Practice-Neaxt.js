import mongoose, { models } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlenght: 60,
    },
    desc: {
      type: String,
      require: true,
      maxlenght: 200,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
);

const Product = models.Product || mongoose.model("Product", ProductSchema);

export default Product;
