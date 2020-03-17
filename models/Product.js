var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
  stockQuantity: { type: Number },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  owner: { type: Schema.Types.ObjectId, ref: "Owner" }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
