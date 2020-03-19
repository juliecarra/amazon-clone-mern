import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { fetchAddresses, deleteAddress } from "../../actions";

export class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      addresses: []
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
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { addresses } = this.props;
    const { message } = this.state;
    return (
      <main>
        {/* <!--REGISTER ADDRESS--> */}
        <div class="registerAddress mt-3">
          <div class="container-fluid c-section">
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-10">
                <div class="a-section a-spacing-medium">
                  <div class="a-subheader a-breadcrumb a-spacing-small">
                    <ul>
                      <li>
                        <a href="#">
                          <span>Your Account</span>
                        </a>
                      </li>
                      <li class="a-breadcrumb-divider">›</li>
                      <li class="active">
                        <a href="#">
                          <span>Your Adresses</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 class="a-spacing-medium a-spacing-top-medium">
                    Your Addresses
                  </h1>
                  {/* <!-- Message from Server --> */}
                  <div class="a-section a-spacing-none a-spacing-top-small">
                    <b>{message}</b>
                  </div>
                  <div class="a-spacing-double-large">
                    <div class="row a-spacing-micro">
                      <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                        <Link
                          to="/address/add"
                          class="a-link-normal add-new-address-button"
                          style={{ textDecoration: "none" }}
                        >
                          <div class="a-box first-desktop-address-tile">
                            <div class="a-box-inner a-padding-extra-large">
                              <i class="far fa-plus"></i>
                              <h2 class="a-color-tertiary">Add Address</h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Address --> */}
                      {addresses.map(address => (
                        <div
                          class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                          key={address._id}
                        >
                          <div class="a-box a-spacing-none normal-desktop-address-tile">
                            <div class="a-box-inner a-padding-none">
                              <div class="address-section-no-default">
                                <div class="a-spacing-small">
                                  <ul class="a-unordered-list a-nostyle a-vertical">
                                    <li>
                                      <h5>
                                        {/* <!-- Address Fullname --> */}
                                        <b>{address.fullName}</b>
                                      </h5>
                                    </li>
                                    {/* <!-- Address street address --> */}
                                    <li>{address.streetAddress}</li>
                                    {/* <!-- Address city state zip code --> */}
                                    <li>
                                      {address.city}, {address.state},{" "}
                                      {address.zipCode}
                                    </li>
                                    {/* <!-- Address country --> */}
                                    <li>{address.country}</li>
                                    {/* <!-- Address Phone number --> */}
                                    <li>Phone number: {address.phoneNumber}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Edit Button --> */}
                            <div class="edit-address-desktop-link">
                              {/* <Link to={`/addresses/${address._id}`}>Edit</Link> */}
                              {/* &nbsp; | &nbsp; */}
                              <a
                                href="#"
                                onClick={this.handleDelete.bind(
                                  this,
                                  address._id
                                )}
                              >
                                Delete
                              </a>
                              {/* <!-- Delete Button --> */}
                              &nbsp; | &nbsp;
                              {/* <!-- Set Address as Default --> */}
                              <a
                                href="#"
                                onClick={this.onSetDefault.bind(
                                  this,
                                  address._id
                                )}
                              >
                                Set as Default
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div class="col-lg-4 col-md-3 col-sm-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/REGISTER ADDRESS--> */}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    addresses: state.addresses.addresses
  };
};

export default connect(mapStateToProps, { fetchAddresses, deleteAddress })(
  Address
);
