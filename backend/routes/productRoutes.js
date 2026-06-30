const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

/* =========================
   GET ALL PRODUCTS
========================= */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
});

/* =========================
   ADD PRODUCT
========================= */
router.post("/", async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProduct = new Product({
      name,
      price,
      image,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
    });
  }
});

/* =========================
   DELETE PRODUCT
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
});

module.exports = router;