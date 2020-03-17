import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchProductsById, addReview } from "../../actions";

class AddReview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProductsById(id);
  }

  constructor(props) {
    super(props);

    this.state = {
      headline: "",
      body: "",
      rating: 0,
      image: "",
      imageName: "",
      product: "",
      user: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageUpload(e) {
    const image = e.target.files[0];
    this.setState({ image });

    const imageName = e.target.files[0].name;
    this.setState({ imageName });
  }

  async submitForm(e) {
    e.preventDefault();
    const id = this.props.match.params.id;

    try {
      // Initialize the form data
      let formData = new FormData();

      // Add the form data we need to submit

      formData.append("headline", this.state.headline);
      formData.append("body", this.state.body);
      formData.append("image", this.state.image, this.state.imageName);
      formData.append("rating", this.state.rating);
      formData.append("product", this.state.product);
      formData.append("user", this.state.user);

      await this.props.addReview(formData, id);
      console.log("sucess");

      this.props.history.push(`/product/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { product } = this.props;
    const { user } = this.props.auth;
    const { headline, body, rating, imageName } = this.state;
    return (
      <main>
        {/* REVIEW ADDRESS */}
        <div className="reviewPage mt-3">
          <div className="container-fluid c-section">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="a-spacing-top-medium">
                  <h1 className="a-spacing-base">
                    <b>Create Review</b>
                  </h1>
                  <div className="row">
                    {/* Product Photo  */}
                    <div className="col-md-2 col-sm-3 col-3">
                      <img src={product.image} style={{ width: "80px" }} />
                    </div>
                    {/* Product Title */}
                    <div className="col-md-10 col-sm-9 col-9 m-auto">
                      <h4>
                        <b>{product.title}</b>
                      </h4>
                    </div>
                  </div>
                  <div className="a-spacing-top-medium"></div>
                  <hr />
                  <h2 className="a-spacing-base">Overall Rating</h2>
                  <div className="a-row">
                    {/* Rating */}
                    <input
                      min="0"
                      max="5"
                      type="number"
                      name="rating"
                      value={rating}
                      onChange={this.handleChange}
                    />
                    <div style={{ color: "#FADA5E" }}>
                      {"★".repeat(rating)} {"☆".repeat(5 - rating)}
                    </div>
                  </div>
                  <div className="a-row a-spacing-top-large">
                    <h2>Add photo or video</h2>
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>
                      Shoppers find images and videos more helpful than text
                      alone.
                    </p>
                  </div>
                  <div className="a-row a-spacing-top-medium">
                    {/* Choose a Photo */}
                    <label className="choosefile-button">
                      <i className="fal fa-plus"></i>
                      <input
                        type="file"
                        name="image"
                        onChange={this.handleImageUpload}
                      />
                    </label>
                    <p>{imageName}</p>
                  </div>
                  <div className="a-spacing-top-large"></div>
                  <hr />
                  {/* Headline */}
                  <div className="headline a-spacing-large">
                    <h2 className="a-spacing-base">Add a headline</h2>
                    <input
                      type="text"
                      className="a-input-text"
                      style={{ width: "70%" }}
                      placeholder="What's most important to know?"
                      name="headline"
                      value={headline}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Body */}
                  <div className="a-spacing-base">
                    <h2 className="a-spacing-base">Write your review</h2>
                    <textarea
                      name="body"
                      value={body}
                      placeholder="What do you like or dislike? What did you see this product for?"
                      style={{ height: "6em", width: "100%" }}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
                <br />
                <br />
                <hr />
                <div className="a-spacing-top-medium">
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>
                    This is how you'll appear to other customers:
                  </p>
                  <div className="media a-spacing-top-large">
                    <div className="media-left">
                      <img
                        src="/img/avatar.png"
                        className="img-fluid"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="media-body pl-3 pt-2">
                      <input
                        type="text"
                        className="a-input-text"
                        style={{ width: "100%" }}
                        value={user.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="a-row a-spacing-top-medium">
                  <span className="a-color-tertiary">
                    Don't worry, you can always change this on your profile
                  </span>
                </div>
                <div className="a-row text-right a-spacing-top-large">
                  <span className="a-button-register">
                    <span className="a-button-inner">
                      <button
                        className="a-button-text"
                        onClick={this.submitForm}
                      >
                        Submit
                      </button>
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
            <div className="a-spacing-large pb-5"></div>
            <hr />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    product: state.product.product,
    review: state.review.review
  };
};

export default connect(mapStateToProps, { fetchProductsById, addReview })(
  AddReview
);
