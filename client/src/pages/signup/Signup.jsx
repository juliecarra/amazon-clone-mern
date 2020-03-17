import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../../actions";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.signupUser(newUser, this.props.history);
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div class="registerPage">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4b">
              <div class="text-center">
                <Link to="/">
                  <img src="/img/logo-black.png" alt class />
                </Link>
                <form class="mt-4">
                  <div class="a-box a-spacing-extra-large">
                    <div class="a-box-inner">
                      <h1 class="a-spacing-small">Create Account</h1>
                      <div class="row a-spacing-base">
                        <label for="ap_costumer_name" class="a-form-table">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="ap_costumer_name"
                          class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="name"
                          value={name}
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="row a-spacing-base">
                        <label for="ap_costumer_name" class="a-form-table">
                          Email
                        </label>
                        <input
                          type="email"
                          id="ap_costumer_name"
                          class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="email"
                          value={email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="row a-spacing-base">
                        <label for="ap_costumer_name" class="a-form-table">
                          Password
                        </label>
                        <input
                          type="password"
                          id="ap_costumer_name"
                          class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="password"
                          value={password}
                          onChange={this.onChange}
                        />
                        <div class="a-alert-container">
                          <div class="a-alert-content">
                            Password should be at least 6 characters
                          </div>
                        </div>
                        <div class="a-row a-spacing-extra-large mb-4">
                          <span class="a-button-primary">
                            <span class="a-button-inner">
                              <span
                                class="a-button-text"
                                onClick={this.onSubmit}
                              >
                                Create your Amazon account
                              </span>
                            </span>
                          </span>
                          <div class="a-row a-spacing-top-medium a-size-small">
                            <b>
                              By creating an account, you agree to Amazon's
                              <a href="#"> conditions of Use</a> and
                              <a href="#"> Privacy Notice</a>
                            </b>
                          </div>
                        </div>
                        <hr />
                        <div class="a-row">
                          <b>
                            Already have an account?
                            <Link to="/login" class="a-link-emphasis">
                              {" "}
                              Sign in
                            </Link>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { signupUser })(withRouter(Signup));
