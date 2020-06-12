import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCart, removeFromCart } from "../../actions";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getCart();
  }

  onDeleteClick = (id) => {
    console.log(id);
    this.props.removeFromCart(id);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  getCartTotalPrice = () => {
    const { cart } = this.props.cart;
    let total = 0;
    cart &&
      cart.map((product) => {
        total += product.price;
      });

    return total;
  };

  render() {
    const { cart } = this.props.cart;
    const { quantity } = this.state;

    return (
      <main>
        <div className="shopping-cart mt-3">
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-7">
                <div className="c-section a-spacing-top-base">
                  <div className="a-row sc-cart-header sc-compact-bottom">
                    <h2>Shopping Cart</h2>
                  </div>
                  <form action="#" method="post">
                    <div className="sc-list-head">
                      <div className="text-right a-spacing-top-micro">
                        <span className="a-color-secondary">Price</span>
                      </div>
                    </div>

                    {cart &&
                      cart.map((product) => (
                        <div className="sc-list-body" key={product._id}>
                          <div className="sc-list-item-border">
                            <div className="a-row a-spacing-top-base a-spacing-base">
                              <div className="row">
                                <div className="col-sm-2 col-2">
                                  <a href="#" className="a-link-normal">
                                    <img
                                      src={product.image}
                                      className="img-fluid w-100"
                                    />
                                  </a>
                                </div>
                                <div className="col-sm-8 col-8">
                                  <div className="a-spacing-mini">
                                    <a
                                      href="#"
                                      className="a-link-normal a-size-medium a-text-bold"
                                    >
                                      {product.title}{" "}
                                    </a>

                                    <span className="a-size-base sc-product-creator">
                                      {product.owner.name}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="a-size-small a-color-secondary sc-product-binding">
                                      Paperback
                                    </span>
                                  </div>
                                  <div>
                                    <span className="a-size-small a-color-success sc-product-availability">
                                      In Stock
                                    </span>
                                  </div>
                                  <div className="a-checkbox a-align-top a-size-small a-spacing-top-micro">
                                    <label>
                                      <input type="checkbox" name value />
                                      <span className="a-checkbox-label">
                                        This is a gift{" "}
                                        <span className="a-size-small">
                                          <a href="#">
                                            <span className="a-size-small">
                                              Learn More
                                            </span>
                                          </a>
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="sc-action-links">
                                    <select
                                      onChange={this.handleChange}
                                      name="quantity"
                                    >
                                      <option name="quantity" value={1}>
                                        Qty: 1&nbsp;
                                      </option>
                                    </select>
                                    &nbsp;&nbsp;
                                    <span>|</span>
                                    &nbsp;
                                    <span className="a-size-small">
                                      <a
                                        href="#"
                                        onClick={this.onDeleteClick.bind(
                                          this,
                                          product._id
                                        )}
                                      >
                                        Delete
                                      </a>
                                    </span>
                                    &nbsp; &nbsp;
                                  </div>
                                </div>
                                <div className="col-sm-2 col-2 tr sm-txt-r">
                                  <p className="a-spacing-small">
                                    <span className="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold">
                                      ${product.price}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="text-right">
                      <p className="a-spacing-none a-spacing-top-mini">
                        <span className="a-size-medium">
                          Subtotal ({cart && cart.length}{" "}
                          {cart && cart.length === 1 ? "item" : "items"})
                        </span>
                        <span className="a-color-price a-text-bold">
                          $
                          <span className="a-size-medium a-color-price">
                            {this.getCartTotalPrice() * quantity}
                          </span>
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5">
                <div className="a-box-group" style={{ marginBottom: "14px" }}>
                  <div className="a-box a-color-alternate-background">
                    <div className="a-box-inner">
                      <div className="a-spacing-mini">
                        <p className="a-spacing-none a-spacing-top-none">
                          <span className="a-size-medium">
                            <span>
                              Subtotal ({cart && cart.length}{" "}
                              {cart && cart.length === 1 ? "item" : "items"}):
                            </span>
                            <span className="a-color-price a-text-bold">
                              <span className="a-size-medium a-color-price">
                                ${this.getCartTotalPrice() * quantity}
                              </span>
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="a-spacing-base mt-1">
                        <input type="checkbox" name="checkbox" />
                        <span className="a-label a-checkbox-label">
                          This order contains a gift
                        </span>
                      </div>
                      <div>
                        <span className="a-spacing-small a-button-primary a-button-icon">
                          <span className="a-button-inner">
                            <Link to="/placeorder" className="a-button-text">
                              Proceed to checkout
                            </Link>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { getCart, removeFromCart })(Cart);
