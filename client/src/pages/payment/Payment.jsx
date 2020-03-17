import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Elements } from "react-stripe-elements";
import { connect } from "react-redux";
import axios from "axios";

import {
  getCart,
  clearCart,
  handlePayment,
  chooseShipment
} from "../../actions";

import PaymentCheckoutForm from "./PaymentCheckoutForm";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
    this.onPurchase = this.onPurchase.bind(this);
  }

  getCartTotalPriceWithShipping = () => {
    const { shipment } = this.props.shipment;
    const { cart } = this.props.cart;

    let total = 0;
    cart.map(product => {
      total += product.price;
    });
    return total + shipment.price;
  };

  getCart = () => {
    return this.state.cart;
  };

  // onPurchase = () => {
  //   debugger;
  //   this.props.handlePayment(this.getCartTotalPriceWithShipping());
  // };

  onPurchase = async () => {
    const { shipment } = this.props.shipment;

    try {
      await axios.post("/api/payments", {
        totalPrice: this.getCartTotalPriceWithShipping(),

        cart: this.getCart(),
        estimatedDelivery: shipment.estimated
      });

      this.props.history.push("/");
      // window.location.reload();
      this.props.clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { cart } = this.props.cart;
    const { shipment } = this.props.shipment;
    return (
      <main>
        {/* <!--Payment --> */}
        <div className="registerAddress mt-3">
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="a-section a-spacing-medium">
                  {/* <!-- Breadcrumbs --> */}
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

                  {/* <!-- Error message  --> */}
                  {/* <div className="a-section a-spacing-none a-spacing-top-small">
                <b>Error</b>
              </div> */}
                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b>(Test with this credit card number: 4242424242424242)</b>
                  </div>
                  <form action="#" method="post">
                    <div className="a-spacing-medium a-spacing-top-medium">
                      <div className="a-spacing-top-medium">
                        {/* <!-- Stripe card --> */}
                        {/* <div ref="card"></div> */}

                        {/* <!-- End of Stripe card --> */}
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

                      {/* <!-- Purchase Button --> */}
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
        {/* <!--/Payment ADDRESS--> */}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  shipment: state.shipment
});

export default connect(mapStateToProps, { getCart, clearCart, chooseShipment })(
  Payment
);
