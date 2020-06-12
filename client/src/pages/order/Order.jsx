import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOrders } from "../../actions";
import { Link, Redirect } from "react-router-dom";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  redirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { orders } = this.props.orders;

    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <main>
        <div class="container-fluid your-order">
          <div class="row">
            <div class="col-xl-2 col-lg-1 col-md-12"></div>
            <div class="col-xl-8 col-lg-9 col-md-12">
              <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb">
                <ul class="a-unordered-list a-nostyle a-horizontal">
                  <li>
                    <span class="a-list-item">
                      <a class="a-link-normal">
                        <span onClick={this.redirect}>Home</span>
                      </a>
                    </span>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <span class="a-list-item">
                      <span class="a-color-state">Your Orders</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-5 col-12">
                  <h1 class="a-spacing-medium">Your Orders</h1>
                </div>
              </div>
              <div class="a-row a-spacing-medium custom-view-options">
                <ul class="a-unordered-list a-nostyle a-horizontal">
                  <li role="tab">
                    <span class="a-list-item"></span>
                  </li>
                  <li class="selected" role="tab">
                    <span class="a-list-item">
                      <span class="item">Orders</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div class="orderContent">
                <div class="orderContentHeader">
                  <div class="row"></div>
                </div>
                {orders &&
                  orders.map((order) => (
                    <p>Estimated delivery: {order.estimatedDelivery}</p>
                  ))}
              </div>
            </div>
            <div class="col-xl-2 col-lg-1 col-md-12"></div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, { fetchOrders })(Order);
