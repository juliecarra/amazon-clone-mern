import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchAddresses, deleteAddress } from "../../actions";

export class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      addresses: [],
    };
  }

  componentDidMount() {
    this.props.fetchAddresses();
  }

  handleDelete(id) {
    this.props.deleteAddress(id);
    this.props.history.push("/");
  }

  async onSetDefault(id) {
    try {
      await axios.put(`/api/addresses/default`, { id: id });
      toast.success(
        "Your address has been successfully registered as your shipping address."
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { addresses } = this.props;
    const { message } = this.state;
    return (
      <main>
        <div className="registerAddress mt-3">
          <ToastContainer />
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <div className="a-section a-spacing-medium">
                  <div className="a-subheader a-breadcrumb a-spacing-small">
                    <ul>
                      <li>
                        <a href="#">
                          <span>Your Account</span>
                        </a>
                      </li>
                      <li className="a-breadcrumb-divider">›</li>
                      <li className="active">
                        <a href="#">
                          <span>Your Adresses</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="a-spacing-medium a-spacing-top-medium">
                    Your Addresses
                  </h1>

                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b>{message}</b>
                  </div>
                  <div className="a-spacing-double-large">
                    <div className="row a-spacing-micro">
                      <div className="col-lg-4 col-md-5 col-sm-12 pb-2">
                        <Link
                          to="/address/add"
                          className="a-link-normal add-new-address-button"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="a-box first-desktop-address-tile">
                            <div className="a-box-inner a-padding-extra-large">
                              <i className="far fa-plus"></i>
                              <h2 className="a-color-tertiary">Add Address</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {addresses.map((address) => (
                        <div
                          className="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                          key={address._id}
                        >
                          <div className="a-box a-spacing-none normal-desktop-address-tile">
                            <div className="a-box-inner a-padding-none">
                              <div className="address-section-no-default">
                                <div className="a-spacing-small">
                                  <ul className="a-unordered-list a-nostyle a-vertical">
                                    <li>
                                      <h5>
                                        <b>{address.fullName}</b>
                                      </h5>
                                    </li>

                                    <li>{address.streetAddress}</li>

                                    <li>
                                      {address.city}, {address.state},{" "}
                                      {address.zipCode}
                                    </li>

                                    <li>{address.country}</li>

                                    <li>Phone number: {address.phoneNumber}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="edit-address-desktop-link">
                              <a
                                href="#"
                                onClick={this.handleDelete.bind(
                                  this,
                                  address._id
                                )}
                              >
                                Delete
                              </a>
                              &nbsp; | &nbsp;
                              <a
                                href="#"
                                onClick={this.onSetDefault.bind(
                                  this,
                                  address._id
                                )}
                              >
                                Set as Shipping Address
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="col-lg-4 col-md-3 col-sm-12"></div>
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

const mapStateToProps = (state) => {
  return {
    addresses: state.addresses.addresses,
  };
};

export default connect(mapStateToProps, { fetchAddresses, deleteAddress })(
  Address
);
