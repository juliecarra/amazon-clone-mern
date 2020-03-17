import { combineReducers } from "redux";

import { products, product } from "./products";
import { categories, category } from "./categories";
import { owners, owner } from "./owners";
import { auth } from "./auth";
import { review, reviews } from "./reviews";
import { address, addresses } from "./addresses";
import { cart } from "./cart";
import { shipment } from "./shipment";
import { orders } from "./orders";

export default combineReducers({
  products,
  product,
  categories,
  category,
  owners,
  owner,
  auth,
  review,
  reviews,
  address,
  addresses,
  cart,
  shipment,
  orders
});
