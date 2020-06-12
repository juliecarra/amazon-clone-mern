const express = require("express");
const router = new express.Router();

const Review = require("../models/Review");
const Product = require("../models/Product");
const uploader = require("../config/cloudinary");

const jwtMiddleware = require("../middlewares/jwt");

router.post(
  "/product/:id",
  jwtMiddleware,

  uploader.single("image"),
  (req, res) => {
    const { headline, body, rating } = req.body;

    const image = req.file;

    const newReview = new Review({
      headline,
      body,
      rating,
      image,
      user: req.decoded._id,
      product: req.params.id,
    });

    if (req.file) newReview.image = req.file.secure_url;

    Product.update({ $push: { reviews: newReview._id } });

    newReview.save((err, review) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });
      }
      return res.status(201).send({ success: true, review: review.toObject() });
    });
  }
);

router.get("/product/:id", (req, res) => {
  Review.find({
    product: req.params.id,
  })
    .populate("user")
    .exec(function (err, reviews) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(reviews);
    });
});

module.exports = router;
