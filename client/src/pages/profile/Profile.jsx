//@Todo fix profile update
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../actions";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleUpdateProfile() {
    const id = this.props.auth.user._id;
    try {
      let data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };

      const response = await this.props.updateProfile(id, data);

      if (response.success) {
        this.setState({ name: "", email: "", password: "" });
      }

      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { name, email, password } = this.state;
    const { user } = this.props.auth;
    return (
      <main>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              <div class="a-section">
                <div class="a-spacing-top-medium"></div>
                <h2 style={{ textAlign: "center" }}>Profile page</h2>
                <a href="/" onClick="handleLogout">
                  Logout
                </a>
                <form>
                  {/* Name Input  */}
                  <div class="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Name</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style={{ width: "100%" }}
                      name="name"
                      value={name}
                      placeholder={user.name}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Email Input */}
                  <div class="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Email</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style={{ width: "100%" }}
                      name="email"
                      value={email}
                      placeholder={user.email}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Password Input */}
                  <div class="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Password</label>
                    <input
                      type="password"
                      class="a-input-text"
                      style={{ width: "100%" }}
                      name="password"
                      value={password}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Button  */}
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span
                          class="a-button-text"
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { updateProfile })(Profile);
