import React, { Component } from "react";
import { connect } from "react-redux";

import { addProduct, fetchCategories, fetchOwners } from "../../actions";

class AddProducts extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchOwners();
  }

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image: "",
      imageName: "",
      price: 0,
      stockQuantity: 1,
      category: "",
      owner: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageUpload(e) {
    const image = e.target.files[0];
    this.setState({ image });

    const imageName = e.target.files[0].name;
    this.setState({ imageName });
  }

  async submitForm() {
    try {
      // Initialize the form data
      let formData = new FormData();

      // Add the form data we need to submit

      formData.append("title", this.state.title);
      formData.append("description", this.state.description);
      formData.append("image", this.state.image, this.state.imageName);
      formData.append("price", this.state.price);
      formData.append("stockQuantity", this.state.stockQuantity);
      formData.append("category", this.state.category);
      formData.append("owner", this.state.owner);

      await this.props.addProduct(formData);

      this.props.history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      title,
      description,
      image,
      imageName,
      price,
      stockQuantity,
    } = this.state;
    const { categories, owners } = this.props;

    return (
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="a-section">
                <div className="a-spacing-top-medium"></div>
                <h2 style={{ textAlign: "center" }}>Add a new product</h2>
                <form>
                  <div className="a-spacing-top-medium">
                    <label>Category</label>
                    <select
                      name="category"
                      className="a-select-option"
                      onChange={this.handleChange}
                    >
                      {categories.map((category) => (
                        <option key={category._id} name="category">
                          {category.type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="a-spacing-top-medium">
                    <label>Owner</label>
                    <select
                      name="owner"
                      className="a-select-option"
                      onChange={this.handleChange}
                    >
                      {owners.map((owner) => (
                        <option name="owner" key={owner._id}>
                          {owner.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Title</label>
                    <input
                      type="text"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="title"
                      value={title}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Price</label>
                    <input
                      type="number"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="price"
                      value={price}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      className="a-input-text"
                      style={{ width: "100%" }}
                      name="stockQuantity"
                      value={stockQuantity}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Description</label>
                    <textarea
                      placeholder="Provide details such as a product description"
                      style={{ width: "100%" }}
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="a-spacing-top-medium">
                    <label style={{ marginBottom: "0px" }}>Add Image</label>
                    <div className="a-row a-spacing-top-medium">
                      <label for className="choosefile-button">
                        <i className="fal fa-plus"></i>
                        <input
                          name="image"
                          type="file"
                          onChange={this.handleImageUpload}
                        />
                        <p style={{ marginTop: "-70px" }}>{imageName}</p>
                      </label>
                    </div>
                  </div>

                  <div className="a-spacing-top-large">
                    <span className="a-button-register">
                      <span className="a-button-inner">
                        <span
                          className="a-button-text"
                          onClick={this.submitForm}
                        >
                          Add Product
                        </span>
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    categories: state.categories.categories,
    owners: state.owners.owners,
  };
};

export default connect(mapStateToProps, {
  addProduct,
  fetchCategories,
  fetchOwners,
})(AddProducts);
