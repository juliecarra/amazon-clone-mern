const express = require("express");
const router = new express.Router();

const Product = require("../models/Product");
const uploader = require("../config/cloudinary");

router.post("/", uploader.single("image"), (req, res) => {
  const {
    title,
    description,
    price,
    stockQuantity,
    rating
    // category,
    // owner
  } = req.body;

  const image = req.file;

  const newProduct = new Product({
    title,
    description,
    image,
    price,
    stockQuantity,
    rating
    // category,
    // owner
  });

  if (req.file) newProduct.image = req.file.secure_url;

  newProduct.save((err, product) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });
    }
    return res.status(201).send({ success: true, product: product.toObject() });
  });
});

router.get("/", (req, res) => {
  Product.find()
    .populate("category")
    .populate("owner")
    .exec(function(err, products) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(products);
    });
});

router.get("/:id", (req, res) => {
  Product.findOne({ _id: { $eq: req.params.id } })
    .populate("category")
    .populate("owner")
    .exec(function(err, product) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(product);
    });
});

router.patch("/:id", uploader.single("image"), (req, res) => {
  const updatedProduct = { ...req.body };

  if (req.file) updatedProduct.image = req.file.secure_url;

  Product.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedProduct },
    { new: true }
  ).exec(function(err, updatedProduct) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    res.status(200).json(updatedProduct);
  });
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id }).exec(function(
    err,
    deletedProduct
  ) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    res.status(200).json(deletedProduct);
  });
});

module.exports = router;
