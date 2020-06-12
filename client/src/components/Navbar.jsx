import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

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

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <header className="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
          <div className="container-fluid desktop-nav">
            <div className="row">
              <div className="col-sm-2">
                <div className="logo-area">
                  <Link to="/">
                    <img src="/img/logo.png" alt="logo" className="img-fluid" />
                  </Link>
                </div>
              </div>

              <div className="col-sm-6 pt-0"></div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
                <div className="nav-global-location">
                  <Link to="/address" className="nav-a nav-a-2">
                    <div
                      className="nav-sprite"
                      id="nav-packard-glow-loc-icon"
                    ></div>
                    <div id="glow-ingress-block">
                      <span className="nav-line-1" id="glow-ingress-line1 ">
                        Deliver to
                      </span>
                      <span className="nav-line-2" id="glow-ingress-line2">
                        France
                      </span>

                      <span className="nav-line-2" id="glow-ingress-line2">
                        France
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
                <div className="nav-fill">
                  <div className="nav-shop">
                    <Link to="#" className="nav-a nav-a-2 nav-single-row-link">
                      <span className="nav-line-2">
                        Browsing History
                        <span
                          className="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </Link>
                  </div>
                  <div className="nav-xshop-container">
                    <div className="nav-xshop">
                      <a href="#" className="nav-a">
                        Today Deals
                      </a>
                      <a href="#" className="nav-a">
                        Help
                      </a>
                      <a href="#" className="nav-a">
                        Registry
                      </a>
                      <a href="#" className="nav-a">
                        Gift cards
                      </a>
                      <a href="#" className="nav-a">
                        Sell
                      </a>
                      <a href="#" className="nav-a">
                        Your amazon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                <div className="nav-tools">
                  <a
                    href="#"
                    id="icp-nav-flyout"
                    className="nav-a nav-a-2 icp-link-style-2"
                  >
                    <span className="acp-nav-link-inner">
                      <span className="nav-line-1">
                        <span className="icp-nav-globe-img-2"></span>
                        <span className="icp-nav-language">EN</span>
                      </span>
                      <span className="nav-line-2">
                        &nbsp;
                        <span
                          className="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </span>
                  </a>
                  <span className="icp-nav-link-border"></span>
                  {isAuthenticated ? (
                    <Link
                      to="/profile"
                      className="nav-a nav-a-2"
                      id="nav-link-accountList"
                      tabindex="0"
                    >
                      <span className="nav-line-1">Hello,</span>
                      <span className="nav-line-2">{user.name}</span>
                    </Link>
                  ) : (
                    <Link
                      to="/signup"
                      className="nav-a nav-a-2"
                      id="nav-link-accountList"
                      tabindex="0"
                    >
                      <span className="nav-line-1">Hello, Sign in</span>
                      <span className="nav-line-2">
                        Account &amp; Lists
                        <span
                          className="nav-icon nav-arrow"
                          style={{ visibility: "visible" }}
                        ></span>
                      </span>
                    </Link>
                  )}
                  <Link
                    to="/orders"
                    className="nav-a nav-a-2 nav-single-row-link"
                  >
                    <span className="nav-line-1"></span>
                    <span className="nav-line-2">Orders</span>
                  </Link>
                  <Link to="/cart" className="nav-a nav-a-2" id="nav-cart">
                    <span aria-hidden="true" className="nav-line-1"></span>
                    <span aria-hidden="true" className="nav-line-2">
                      Cart
                    </span>
                    <span className="nav-cart-icon nav-sprite"></span>
                    <span
                      className="nav-cart-count nav-cart-0"
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default withRouter(connect(mapStateToProps, { getCart })(Navbar));
