import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Elements } from "react-stripe-elements";
import { connect } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCart, clearCart } from "../../actions";

import PaymentCheckoutForm from "./PaymentCheckoutForm";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      redirect: false,
    };
    this.onPurchase = this.onPurchase.bind(this);
  }
  componentDidMount() {
    this.props.getCart();
  }

  getCartTotalPriceWithShipping = () => {
    const { shipment } = this.props.shipment;
    const { cart } = this.props.cart;

    let total = 0;
    cart.map((product) => {
      total += product.price;
    });
    return total + shipment.price;
  };

  onPurchase = async () => {
    const { shipment } = this.props.shipment;

    try {
      await axios.post("/api/payments", {
        totalPrice: this.getCartTotalPriceWithShipping(),
        cart: this.props.getCart(),
        estimatedDelivery: shipment.estimated,
      });

      await this.props.history.push("/orders");
      await this.props.clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <main>
        <div className="registerAddress mt-3">
          <ToastContainer />
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="a-section a-spacing-medium">
                  <div className="a-subheader a-breadcrumb a-spacing-small">
                    <ul>
                      <li>
                        <Link to="/cart">
                          <span>Your Cart</span>
                        </Link>
                      </li>
                      <li className="a-breadcrumb-divider"></li>
                      <li>
                        <Link to="/placeorder">
                          <span>Place order</span>
                        </Link>
                      </li>
                      <li className="a-breadcrumb-divider"></li>
                      <li className="active">
                        <Link to="/payment">
                          <span>Payment</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="a-section">
                  <h2>Make a payment</h2>
                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b>
                      The total price is ${this.getCartTotalPriceWithShipping()}
                    </b>
                  </div>

                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b>(Test with this credit card number: 4242424242424242)</b>
                  </div>
                  <form action="#" method="post">
                    <div className="a-spacing-medium a-spacing-top-medium">
                      <div className="a-spacing-top-medium">
                        <div className="payment">
                          <Elements>
                            <PaymentCheckoutForm {...this.props} />
                          </Elements>
                        </div>
                      </div>

                      <div className="a-spacing-top-medium"></div>
                      <hr />
                      <div className="a-spacing-top-medium">
                        <span>
                          <b>Make sure your address is correct</b>
                        </span>
                      </div>
                      <div>
                        <span>
                          If the address contains typos or other errors, your
                          package may be undeliverable.
                        </span>
                      </div>

                      <div className="a-spacing-top-large">
                        <span className="a-button-register">
                          <span className="a-button-inner">
                            <span
                              className="a-button-text"
                              onClick={this.onPurchase}
                            >
                              Purchase
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  shipment: state.shipment,
});

export default connect(mapStateToProps, { getCart, clearCart })(Payment);
