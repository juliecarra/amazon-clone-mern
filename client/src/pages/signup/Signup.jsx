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
      password: "",
      message: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      await this.props.signupUser(newUser, this.props.history);
    } catch (error) {
      this.setState({ message: error });
    }
  };

  render() {
    const { name, email, password, message } = this.state;

    return (
      <div className="registerPage">
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4b">
              <div className="text-center">
                <Link to="/">
                  <img src="/img/logo-black.png" alt="" className />
                </Link>
                <form className="mt-4">
                  <div className="a-box a-spacing-extra-large">
                    <div className="a-box-inner">
                      <h1 className="a-spacing-small">Create Account</h1>
                      <div className="row a-spacing-base">
                        <label for="ap_costumer_name" className="a-form-table">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="ap_costumer_name"
                          className="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="name"
                          value={name}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="row a-spacing-base">
                        <label for="ap_costumer_name" className="a-form-table">
                          Email
                        </label>
                        <input
                          type="email"
                          id="ap_costumer_name"
                          className="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="email"
                          value={email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="row a-spacing-base">
                        <label for="ap_costumer_name" className="a-form-table">
                          Password
                        </label>
                        <input
                          type="password"
                          id="ap_costumer_name"
                          className="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                          name="password"
                          value={password}
                          onChange={this.onChange}
                        />
                        <div className="a-alert-container"></div>
                        <div className="a-row a-spacing-extra-large mb-4">
                          <span className="a-button-primary">
                            <span className="a-button-inner">
                              <span
                                className="a-button-text"
                                onClick={this.onSubmit}
                              >
                                Create your Amazon account
                              </span>
                            </span>
                          </span>
                          <div className="a-row a-spacing-top-medium a-size-small">
                            <b>
                              By creating an account, you agree to Amazon's
                              <a href="#"> conditions of Use</a> and
                              <a href="#"> Privacy Notice</a>
                            </b>
                          </div>
                        </div>
                        <hr />
                        <div className="a-row">
                          <b>
                            Already have an account?
                            <Link to="/login" className="a-link-emphasis">
                              {" "}
                              Sign in
                            </Link>
                          </b>
                        </div>
                        {message && (
                          <div className="info info-danger">{message}</div>
                        )}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signupUser })(withRouter(Signup));
