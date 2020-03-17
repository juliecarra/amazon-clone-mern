import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  getCart,
  fetchAddresses,
  handleShipment,
  chooseShipment
} from "../../actions";

class Placeorder extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.fetchAddresses();
    this.props.handleShipment();
  }

  handleChooseShipment = shipment => {
    this.props.chooseShipment(shipment);
  };

  getCartTotalPrice = () => {
    const { cart } = this.props.cart;
    let total = 0;
    cart &&
      cart.map(product => {
        total += product.price;
      });

    return total;
  };

  getCartTotalPriceWithShipping = () => {
    const { shipment } = this.props.shipment;
    const { cart } = this.props.cart;
    let total = 0;
    cart &&
      cart.map(product => {
        total += product.price;
      });
    return total + shipment.price;
  };

  render() {
    const { cart } = this.props.cart;
    const { addresses } = this.props.addresses;
    const { shipment } = this.props.shipment;

    return (
      <div className="container-fluid">
        <div className="shipping-address">
          <div className="navbarShipping a-spacing-large">
            <Link to="/">
              <img src="img/placeHeadernav.gif" className="img-fluid" />
            </Link>
          </div>
          <div className="a-row">
            <div className="a-size-large a-text-bold a-spacing-mini">
              Review your order
            </div>
            <div className="a-row a-spacing-small a-size-mini"></div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-9 col-sm-12">
              <div className="a-row a-spacing-large"></div>
              <div className="spc-top a-box a-spacing-small">
                <div className="a-box-inner">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-sm-6 col-6">
                      <div className="a-spacing-base">
                        <div className="a-row">
                          <strong>
                            Shipping address{" "}
                            <small>
                              <Link to="/address">Change</Link>
                            </small>
                          </strong>
                        </div>
                        <div className="a-row">
                          <div className="displayAddressDiv">
                            {/* <!-- User's address --> */}
                            {addresses.map(address => (
                              <ul className="displayAddressUL">
                                <li>{address.fullName}</li>
                                <li>{address.streetAddress}</li>
                                <li>{address.city}</li>
                                <li>{address.country}</li>
                                <li>
                                  Phone:
                                  <span dir="ltr">{address.phoneNumber}</span>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6 col-6">
                      <div className="a-spacing-base">
                        <div className="a-row">
                          <strong>
                            Payment Method{" "}
                            <small>
                              <a href="#">Change</a>
                            </small>
                          </strong>
                        </div>
                        <div className="a-row">
                          <ul className="no-bullet-list">
                            <li className="a-spacing-micro">
                              <span className="a-list-item">
                                <span>
                                  <img
                                    src="img/visa.gif"
                                    className="img-fluid"
                                  />
                                </span>
                                ending in <span>4242</span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="a-row a-spacing-base">
                        <div className="a-row">
                          <strong>
                            Billing Address{" "}
                            <small>
                              <Link to="/address">Change </Link>
                            </small>
                          </strong>
                        </div>
                        <span>Same as shipping address</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-12 col-12">
                      <div className="a-spacing-base">
                        <div className="a-spacing-mini">
                          <span>
                            <strong>Gift cards &amp; promotional codes</strong>
                          </span>
                        </div>
                        <div className="row">
                          <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7 col-8 pr-0">
                            <input
                              type="text"
                              autocomplete="off"
                              className="a-input-text"
                              placeholder="Enter Code"
                            />
                          </div>
                          <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5 col-4">
                            <span className="a-buton-apply-code">
                              <span className="a-button-inner">
                                <span className="a-button-text">Apply</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spc-orders a-box">
                <div className="a-box-inner">
                  <div className="shipping-group">
                    {/* <!-- Estimated delivery --> */}
                    <div className="a-row a-color-state a-text-bold a-size-medium a-spacing-small">
                      Estimated delivery: {shipment.estimated}
                    </div>
                    <div className="row">
                      {/* <!-- Cart --> */}
                      <div className="col-xl-6 col-lg-7 col-sm-6 col-12">
                        {cart &&
                          cart.map(product => (
                            <div
                              className="a-row a-spacing-base"
                              key={product._id}
                            >
                              <div className="row">
                                {/* <!-- Product's photo --> */}
                                <div className="col-sm-3 col-3">
                                  <img
                                    src={product.image}
                                    style={{ width: "100px" }}
                                  />
                                </div>
                                {/* <!-- Product's Title --> */}
                                <div className="col-sm-9 col-9">
                                  <div className="a-row">
                                    <strong>{product.title}</strong>
                                  </div>
                                  {/* <!-- Product's owner name --> */}
                                  <div className="a-row a-size-small">
                                    by {product.owner.name}
                                  </div>
                                  <div className="a-row">
                                    {/* <!-- Product's price --> */}
                                    <span className="a-color-price a-spacing-micro">
                                      <strong dir="ltr">
                                        ${product.price}
                                      </strong>
                                    </span>
                                  </div>
                                  <div className="a-row">
                                    <span className="availability a-color-success">
                                      In Stock.
                                    </span>
                                  </div>
                                  <div className="a-row">
                                    {/* <!-- Product's quantity --> */}
                                    <strong>Quantity: 1</strong>
                                  </div>
                                  <div className="a-row a-color-secondary a-size-small">
                                    Sold by:&nbsp;Amazon.com Services, Inc
                                  </div>
                                  <div className="a-row">
                                    <div className="a-row a-spacing-top-micro">
                                      <span className="a-button-small">
                                        <span className="a-button-inner">
                                          <i className="a-icon checkout-giftbox-icon"></i>
                                          <a
                                            href="#"
                                            className="a-button-text gift-popover-link"
                                          >
                                            Add a gift receipt
                                          </a>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="a-row">
                                      <span className="a-color-secondary a-size-mini">
                                        and see other gift options
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="col-xl-6 col-lg-5 col-sm-6 col-12">
                        <div className="a-row shipping-speeds">
                          <fieldset>
                            <span className="shipping-speeds-title a-size-medium">
                              <b>Choose a delivery option:</b>
                            </span>
                            {/* <!-- Delivery option --> */}
                            <div className="a-spacing-mini wednesday">
                              {/* <!-- Shipping normal --> */}
                              <input
                                type="radio"
                                name="order0"
                                onClick={this.handleChooseShipment("normal")}
                                defaultChecked
                              />
                              <span className="a-radio-label">
                                <span className="a-color-success">
                                  <strong>Averages 7 business days</strong>
                                </span>
                                <br />
                                <span className="a-color-secondary">
                                  $13.98&nbsp;-&nbsp;Standard International
                                  Shipping - No Tracking
                                </span>
                              </span>
                            </div>
                            <br />
                            <div className="a-spacing-mini tuesday">
                              {/* <!-- Shipping fast --> */}
                              <input
                                type="radio"
                                name="order0"
                                onClick={this.handleChooseShipment("fast")}
                              />
                              <span className="a-radio-label">
                                <span className="a-color-success">
                                  <strong>Averages 3 business days</strong>
                                </span>
                                <br />
                                <span className="a-color-secondary">
                                  $49.98&nbsp;-&nbsp;Shipping
                                </span>
                              </span>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
              <div className="a-box-group">
                <div className="a-box a-first">
                  <div className="a-box-inner">
                    <div className="a-row a-spacing-micro">
                      <Link to="/payment">
                        <span className="a-button-place-order">
                          Place your order in USD
                        </span>
                      </Link>
                    </div>
                    <div className="a-row a-spacing-small a-size-small a-text-center">
                      By placing your order, you agree to Amazon's{" "}
                      <a href="#">privacy notice </a>
                      and <a href="#">conditions of use</a>.
                    </div>
                    <div className="a-row">
                      <div id="tfx-header">
                        <div className="a-box a-alert-info a-spacing-small">
                          <div className="a-box-inner alert-info-no-icon">
                            <strong>
                              Amazon Currency Converter is Enabled. &nbsp;
                              <a href="#" className="a-size-mini">
                                Learn More
                              </a>
                            </strong>
                          </div>
                        </div>
                      </div>
                      <h3 className="a-spacing-micro a-size-base">
                        Order Summary
                      </h3>
                      <div
                        className="order-summary"
                        style={{ fontSize: "12px" }}
                      >
                        <div className="row">
                          {/* <!-- Cart's total price --> */}
                          <div className="col-sm-6">Items:</div>
                          {cart.map(product => (
                            <div className="col-sm-6 text-right">
                              USD {product.price}
                            </div>
                          ))}
                          {/* <div className="col-sm-6 text-right">
                            USD {this.getCartTotalPrice()}
                          </div> */}
                        </div>
                        <div className="row">
                          {/* <!-- Shipping cost --> */}
                          <div className="col-sm-6">Shipping & handling:</div>

                          <div className="col-sm-6 text-right">
                            USD {shipment.price}
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-sm-6"></div>
                          <div className="col-sm-6 text-right">
                            <hr />
                          </div>
                        </div>
                        {/* <!-- Total Price with Shipping --> */}
                        <div className="row">
                          <div className="col-sm-6">Total Before Tax:</div>
                          <div className="col-sm-6 text-right">
                            USD {this.getCartTotalPrice()}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            Estimated tax to be collected:
                          </div>
                          <div className="col-sm-6 text-right">USD 0.00</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="a-color-price a-size-medium a-text-bold">
                              Order total:
                            </div>
                          </div>
                          <div className="col-sm-6 text-right">
                            {/* <!-- Total Price with Shipping --> */}
                            <div className="a-color-price a-size-medium a-text-bold">
                              USD {this.getCartTotalPriceWithShipping()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="a-box a-last a-color-alternate-background">
                  <div className="a-box-inner">
                    <div className="a-spacing-base">
                      <div className="a-row">
                        <span>
                          <i className="fas fa-caret-down"></i>
                          <a href="#">Selected payment currency</a>
                        </span>
                        <fieldset className="pl-3">
                          <span style={{ marginLeft: "1rem" }}>
                            <input
                              type="radio"
                              className="no-js-hide"
                              value="transactional"
                            />
                            <span className="a-radio-label">USD</span>
                          </span>
                          <div className="a-row">
                            <span className="a-size-mini">
                              <a href="#">(Change card currency)</a>
                            </span>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="a-size-mini">
                      <div className="a-row a-spacing-mini mb-1">
                        Please note that your country may charge import duties,
                        taxes and fees that you may have to pay ahead of
                        delivery.
                        <a href="#">Learn more</a>
                      </div>
                      <div className="a-row a-spacing-mini mb-1">
                        <a href="#">How are shipping costs calculated?</a>
                      </div>
                      <div className="a-row a-spacing-mini">
                        <a href="#">Why didn't I qualify for free shipping?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a-row a-spacing-small a-spacing-top-small">
            <p className="a-color-secondary a-size-mini">
              Do you need help? Explore our
              <a href="#">Help pages</a> or
              <a href="#">contact us</a>
            </p>
            <p className="a-color-secondary a-size-mini">
              For an item sold by Amazon.com: When you click the "Place your
              order" button, we'll send you an email message acknowledging
              receipt of your order. Your contract to purchase an item will not
              be complete until we send you an email notifying you that the item
              has been shipped.
            </p>
            <p
              id="state-sales-tax-info"
              className="a-color-secondary a-size-mini"
            >
              Colorado, Oklahoma, South Dakota and Vermont Purchasers:
              <a href="#">
                Important information regarding sales tax you may owe in your
                State
              </a>
            </p>
            <div className="a-color-secondary a-size-mini">
              <p className="a-color-secondary a-size-mini">
                Within 30 days of delivery, you may return new, unopened
                merchandise in its original condition. Exceptions and
                restrictions apply. See Amazon.com's
                <a href="#">Returns Policy</a>
                <br />
                <br />
                Go to the
                <a href="#">Amazon.com homepage</a> without completing your
                order.
              </p>
            </div>
          </div>
          <hr />
          <p
            className="a-size-small a-text-center a-color-secondary"
            data-testid
          >
            <a href="#">Conditions of Use</a> |<a href="#">Privacy Notice</a> ©
            1996-2020, Amazon.com, Inc.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  addresses: state.addresses,
  shipment: state.shipment
});

export default connect(mapStateToProps, {
  getCart,
  fetchAddresses,
  handleShipment,
  chooseShipment
})(Placeorder);
