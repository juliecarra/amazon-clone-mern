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
      securityCode: ""
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
        securityCode: this.state.securityCode
      };

      await this.props.addAddress(data);

      this.props.history.push("/address");
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
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
      securityCode
    } = this.state;
    return (
      <main>
        {/* <!--REGISTER ADDRESS--> */}
        <div class="registerAddress mt-3">
          <div class="container-fluid c-section">
            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-6">
                <div class="a-section a-spacing-medium">
                  <div class="a-subheader a-breadcrumb a-spacing-small">
                    <ul>
                      <li>
                        <a href="#">
                          <span>Your Account</span>
                        </a>
                      </li>
                      <li class="a-breadcrumb-divider">›</li>
                      <li>
                        <a href="#">
                          <span>Your Adresses</span>
                        </a>
                      </li>
                      <li class="a-breadcrumb-divider">›</li>
                      <li class="active">
                        <a href="#">
                          <span>New Address</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="a-section">
                  <h2>Add a new address</h2>
                  <div class="a-section a-spacing-none a-spacing-top-small">
                    <b>
                      Or pick up your packages at your convenience from our
                      self-service locations. To add an Amazon Pickup Point or
                      Locker, click
                      <a href="#">here</a>.
                    </b>
                  </div>
                  {/* <!-- Error Message --> */}
                  <div class="a-section a-spacing-none a-spacing-top-small">
                    <b></b>
                  </div>
                  <form>
                    <div class="a-spacing-medium a-spacing-top-medium">
                      {/* <!-- Country / Region --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Country/Region
                        </label>
                        <select
                          class="a-select-option"
                          name="country"
                          value={country}
                          onChange={this.handleChange}
                        >
                          {countries.map(country => (
                            <option
                              v-for="country in countries"
                              key={country.alpha2Code}
                              value={country.name}
                            >
                              {country.name}
                            </option>
                          ))}
                          <option></option>
                        </select>
                      </div>
                      {/* <!-- Full name --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>Full Name</label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          name="fullName"
                          value={fullName}
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <!-- Street Address --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Street Address
                        </label>
                        <input
                          name="streetAddress1"
                          value={streetAddress1}
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          placeholder="Street and number, P.O. box, c/o."
                          onChange={this.handleChange}
                        />
                        {/* <!-- Street Address 2 --> */}
                        <input
                          name="streetAddress2"
                          value={streetAddress2}
                          type="text"
                          class="a-input-text a-spacing-top-small"
                          style={{ width: "100%" }}
                          placeholder="Apartment, suite, unit, building, floor, etc."
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <!-- City --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>City</label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          name="city"
                          value={city}
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <!-- State --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          State / Province / Region
                        </label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          name="state"
                          value={state}
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <!-- Zip Code --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>Zip Code</label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          name="zipCode"
                          value={zipCode}
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <!-- Phone Number --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Phone Number
                        </label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={this.handleChange}
                        />
                        <div class="a-section a-spacing-none a-spacing-top-micro">
                          <span class="a-size-mini">
                            May be used to assist delivery
                          </span>
                        </div>
                      </div>
                      <div class="a-spacing-base a-spacing-top-medium">
                        <h3>Add delivery instructions</h3>
                      </div>
                      {/* <!-- Delivery Instruction --> */}
                      <div class="a-spacing-top-medium">
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
                      {/* <!-- Security code --> */}
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Do we need a security code or a call box number to
                          access this building?
                        </label>
                        <input
                          type="text"
                          class="a-input-text"
                          style={{ width: "100%" }}
                          placeholder="1234"
                          name="securityCode"
                          value={securityCode}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="a-spacing-top-medium">
                        <label style={{ marginBottom: "0px" }}>
                          Weekend delivery
                        </label>
                        <a href="#">
                          <i class="fas fa-angle-down"></i> Which days can you
                          receive packages?
                        </a>
                      </div>
                      <div class="a-spacing-top-medium"></div>
                      <hr />
                      <div class="a-spacing-top-medium">
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
                      <div class="a-spacing-top-small">
                        <span>
                          <a href="#">Tips for entering addresses</a>
                        </span>
                        <span>|</span>
                        <span>
                          <a href="#">APO/FPO address tips</a>
                        </span>
                      </div>
                      <div class="a-spacing-top-large">
                        <span class="a-button-register">
                          <span class="a-button-inner">
                            <span
                              class="a-button-text"
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
              <div class="col-sm-3"></div>
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
    address: state.address.address
  };
};

export default connect(mapStateToProps, { addAddress })(AddAddress);
