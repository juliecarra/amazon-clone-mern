import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { addAddress } from "../../actions";

class AddAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      country: "France",
      fullName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliverInstructions: "",
      securityCode: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddAddress = this.onAddAddress.bind(this);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  async onAddAddress(e) {
    e.preventDefault();
    try {
      let data = {
        country: this.state.country,
        fullName: this.state.fullName,
        streetAddress:
          this.state.streetAddress1 + " " + this.state.streetAddress2,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber,
        deliverInstructions: this.state.deliverInstructions,
        securityCode: this.state.securityCode,
      };

      await this.props.addAddress(data);

      this.props.history.push("/address");
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async fetchCountries() {
    try {
      const response = await axios.get("/api/addresses/countries");

      this.setState({ countries: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { address } = this.props;
    const {
      countries,
      country,
      fullName,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zipCode,
      phoneNumber,
      deliverInstructions,
      securityCode,
    } = this.state;
    return (
      <main>
        <div className="registerAddress mt-3">
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="a-section a-spacing-medium">
                  <div className="a-subheader a-breadcrumb a-spacing-small">
                    <ul>
                      <li>
                        <a href="#">
                          <span>Your Account</span>
                        </a>
                      </li>
                      <li className="a-breadcrumb-divider">›</li>
                      <li>
                        <a href="#">
                          <span>Your Adresses</span>
                        </a>
                      </li>
                      <li className="a-breadcrumb-divider">›</li>
                      <li className="active">
                        <a href="#">
                          <span>New Address</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="a-section">
                  <h2>Add a new address</h2>
                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b>
                      Or pick up your packages at your convenience from our
                      self-service locations. To add an Amazon Pickup Point or
                      Locker, click
                      <a href="#">here</a>.
                    </b>
                  </div>

                  <div className="a-section a-spacing-none a-spacing-top-small">
                    <b></b>
                  </div>
                  <form>
                    <div className="a-spacing-medium a-spacing-top-medium">
                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Country/Region
                        </label>
                        <select
                          className="a-select-option"
                          name="country"
                          value={country}
                          onChange={this.handleChange}
                        >
                          {countries.map((country) => (
                            <option
                              key={country.alpha2Code}
                              value={country.name}
                            >
                              {country.name}
                            </option>
                          ))}
                          <option></option>
                        </select>
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>Full Name</label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          name="fullName"
                          value={fullName}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Street Address
                        </label>
                        <input
                          name="streetAddress1"
                          value={streetAddress1}
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          placeholder="Street and number, P.O. box, c/o."
                          onChange={this.handleChange}
                        />

                        <input
                          name="streetAddress2"
                          value={streetAddress2}
                          type="text"
                          className="a-input-text a-spacing-top-small"
                          style={{ width: "100%" }}
                          placeholder="Apartment, suite, unit, building, floor, etc."
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>City</label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          name="city"
                          value={city}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          State / Province / Region
                        </label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          name="state"
                          value={state}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>Zip Code</label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          name="zipCode"
                          value={zipCode}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={this.handleChange}
                        />
                        <div className="a-section a-spacing-none a-spacing-top-micro">
                          <span className="a-size-mini">
                            May be used to assist delivery
                          </span>
                        </div>
                      </div>
                      <div className="a-spacing-base a-spacing-top-medium">
                        <h3>Add delivery instructions</h3>
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Do we need additional instructions to find this
                          address?
                        </label>
                        <textarea
                          name="deliverInstructions"
                          value={deliverInstructions}
                          placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"
                          style={{ height: "6em", width: "100%" }}
                          onChange={this.handleChange}
                        ></textarea>
                      </div>

                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Do we need a security code or a call box number to
                          access this building?
                        </label>
                        <input
                          type="text"
                          className="a-input-text"
                          style={{ width: "100%" }}
                          placeholder="1234"
                          name="securityCode"
                          value={securityCode}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Weekend delivery
                        </label>
                        <a href="#">
                          <i className="fas fa-angle-down"></i> Which days can
                          you receive packages?
                        </a>
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
                      <div className="a-spacing-top-small">
                        <span>
                          <a href="#">Tips for entering addresses</a>
                        </span>
                        <span>|</span>
                        <span>
                          <a href="#">APO/FPO address tips</a>
                        </span>
                      </div>
                      <div className="a-spacing-top-large">
                        <span className="a-button-register">
                          <span className="a-button-inner">
                            <span
                              className="a-button-text"
                              onClick={this.onAddAddress}
                            >
                              Add address
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

const mapStateToProps = (state) => {
  return {
    address: state.address.address,
  };
};

export default connect(mapStateToProps, { addAddress })(AddAddress);
