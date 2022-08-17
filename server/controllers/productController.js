import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc   Fetch all products
// @route  GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
  //   console.log(products);
});

export { getProducts };
