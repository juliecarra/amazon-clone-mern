import React from "react";

import Admin from "./pages/admin/Admin";

import "./styles/css/font-awesome/css/all.css";
import "./styles/css/default.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import ProductItem from "./pages/product/ProductItem";
import AddProducts from "./pages/admin/AddProducts";
import AddCategory from "./pages/admin/AddCategory";
import AddOwner from "./pages/admin/AddOwner";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Footer from "./components/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AddReview from "./pages/review/AddReview";
import Address from "./pages/address/Address";
import AddAddress from "./pages/address/AddAddress";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Payment from "./pages/payment/Payment";
import Order from "./pages/order/Order";

const App = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductItem} />
        // Admin routes
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/addProducts" component={AddProducts} />
        <Route exact path="/addCategory" component={AddCategory} />
        <Route exact path="/addOwner" component={AddOwner} />
        <Route exact path="/products/:id" component={UpdateProduct} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        // Protected routes
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/reviews/:id" component={AddReview} />
        <PrivateRoute exact path="/address" component={Address} />
        <PrivateRoute exact path="/address/add" component={AddAddress} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/placeorder" component={Placeorder} />
        <PrivateRoute exact path="/payment" component={Payment} />
        {/* <PrivateRoute exact path="/orders" component={Order} /> */}
      </Switch>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Footer />
      )}
    </div>
  );
});

export default App;
