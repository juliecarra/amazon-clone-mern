import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
import { updateProfile } from "../../actions";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleUpdateProfile() {
    const id = this.props.auth.user._id;
    try {
      let data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      await this.props.updateProfile(id, data);

      await toast.success(
        "Your profile has been updated, log back to see the changes."
      );
    } catch (error) {
      console.log(error);
    }
  }

  redirect = () => {
    this.setState({ redirect: true });
  };
  render() {
    const { name, email, password } = this.state;
    const { user } = this.props.auth;

    return (
      <main>
        <div className="container-fluid">
          <div className="row">
            <ToastContainer />
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="a-section">
                <div className="a-spacing-top-medium"></div>
                <h2 style={{ textAlign: "center" }}>Profile page</h2>
                <a
                  href="/"
                  onClick="handleLogout"
                  className="a-button-history margin-right-10"
                >
                  Logout
                </a>

                <form>
                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Name</label>
                    <input
                      type="text"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="name"
                      value={name}
                      placeholder={user.name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Email</label>
                    <input
                      type="text"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="email"
                      value={email}
                      placeholder={user.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Password</label>
                    <input
                      type="password"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="password"
                      value={password}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="a-spacing-top-large">
                    <span className="a-button-register">
                      <span className="a-button-inner">
                        <span
                          className="a-button-text"
                          onClick={this.handleUpdateProfile}
                        >
                          Update profile
                        </span>
                      </span>
                    </span>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateProfile })(Profile);
