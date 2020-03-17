import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories, addCategory } from "../../actions";

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async submitForm() {
    try {
      const data = { type: this.state.type };

      await this.props.addCategory(data);

      this.props.history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { categories } = this.props;
    const { type } = this.state;
    return (
      <main>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              <div class="a-section">
                <div class="a-spacing-top-medium"></div>
                <h2 style={{ textAlign: "center" }}>Add a new category</h2>
                <form>
                  {/* Category Input  */}
                  <div class="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Type</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style={{ width: "100%" }}
                      name="type"
                      value={type}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Button  */}
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" onClick={this.submitForm}>
                          Add Category
                        </span>
                      </span>
                    </span>
                  </div>
                </form>
                <br />
                {categories.map(category => (
                  <ul key={category._id} class="list-group-item">
                    <li>{category.type}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    category: state.category.category
  };
};

export default connect(mapStateToProps, { fetchCategories, addCategory })(
  AddCategory
);
