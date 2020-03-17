import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Search from "./Search";

import { getCart } from "../actions";

class Navbar extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  cartLength = () => {
    const { cart } = this.props.cart;
    if (cart && cart.length > 0) return cart.length;
    else return 0;
  };

  // handleDeliveryCountry = () => {
  //   const { user } = this.props.auth;

  //   if (user && user.address) return user.address;
  //   else return "France";
  // };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
          <div class="container-fluid desktop-nav">
            <div class="row">
              {/* <!-- Logo --> */}
              <div class="col-sm-2">
                <div class="logo-area">
                  <Link to="/">
                    <img src="/img/logo.png" alt="logo" class="img-fluid" />
                  </Link>
                </div>
              </div>
              {/* <!-- Search Bar --> */}
              <div class="col-sm-6 pt-0">{/* <!-- <Search  /> --> */}</div>
              <div class="col-sm-4"></div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
                <div class="nav-global-location">
                  <Link to="/address" class="nav-a nav-a-2">
                    <div
                      class="nav-sprite"
                      id="nav-packard-glow-loc-icon"
                    ></div>
                    <div id="glow-ingress-block">
                      <span class="nav-line-1" id="glow-ingress-line1 ">
                        Deliver to
                      </span>
                      <span class="nav-line-2" id="glow-ingress-line2">
                        France
                        {/* {this.handleDeliveryCountry()} */}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
                <div class="nav-fill">
                  <div class="nav-shop">
                    <Link to="#" class="nav-a nav-a-2 nav-single-row-link">
                      <span class="nav-line-2">
                        Browsing History
                        <span
                          class="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </Link>
                  </div>
                  <div class="nav-xshop-container">
                    <div class="nav-xshop">
                      <a href="#" class="nav-a">
                        Today Deals
                      </a>
                      <a href="#" class="nav-a">
                        Help
                      </a>
                      <a href="#" class="nav-a">
                        Registry
                      </a>
                      <a href="#" class="nav-a">
                        Gift cards
                      </a>
                      <a href="#" class="nav-a">
                        Sell
                      </a>
                      <a href="#" class="nav-a">
                        Your amazon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                <div class="nav-tools">
                  <a
                    href="#"
                    id="icp-nav-flyout"
                    class="nav-a nav-a-2 icp-link-style-2"
                  >
                    <span class="acp-nav-link-inner">
                      <span class="nav-line-1">
                        <span class="icp-nav-globe-img-2"></span>
                        <span class="icp-nav-language">EN</span>
                      </span>
                      <span class="nav-line-2">
                        &nbsp;
                        <span
                          class="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </span>
                  </a>
                  <span class="icp-nav-link-border"></span>
                  {isAuthenticated ? (
                    <Link
                      to="/profile"
                      class="nav-a nav-a-2"
                      id="nav-link-accountList"
                      tabindex="0"
                    >
                      <span class="nav-line-1">Hello,</span>
                      <span class="nav-line-2">{user.name}</span>
                    </Link>
                  ) : (
                    <Link
                      to="/signup"
                      class="nav-a nav-a-2"
                      id="nav-link-accountList"
                      tabindex="0"
                    >
                      <span class="nav-line-1">Hello, Sign in</span>
                      <span class="nav-line-2">
                        Account &amp; Lists
                        <span
                          class="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </Link>
                  )}
                  {/* <Link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                    <span class="nav-line-1"></span>
                    <span class="nav-line-2">Orders</span>
                  </Link> */}
                  <Link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                    <span aria-hidden="true" class="nav-line-1"></span>
                    <span aria-hidden="true" class="nav-line-2">
                      Cart
                    </span>
                    <span class="nav-cart-icon nav-sprite"></span>
                    <span
                      class="nav-cart-count nav-cart-0"
                      id="nav-cart-count"
                      aria-hidden="true"
                    >
                      {" "}
                      {this.cartLength()}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

export default withRouter(connect(mapStateToProps, { getCart })(Navbar));
