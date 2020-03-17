import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProducts, deleteProduct } from "../../actions";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDelete(id) {
    this.props.deleteProduct(id);
  }

  // async handleDelete(id) {
  //   try {
  //     await axios.delete(`/api/products/${id}`);
  //     const products = this.state.products.filter(
  //       product => product._id !== id
  //     );
  //     this.setState({ products });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  render() {
    const { products } = this.props;

    return (
      <main>
        <div className="a-spacing-large"></div>
        <div className="container-fluid browsing-history">
          <div className="row">
            <div className="col-sm-8 col-8">
              <h1 className="a-size-large a-spacing-none a-text-normal">
                All products
              </h1>
              <div className="a-spacing-large"></div>
              {/* Button */}
              <Link to="/addProducts" className="a-button-buy-again">
                Add a new product
              </Link>
              <Link
                to="/addCategory"
                className="a-button-history margin-right-10"
              >
                Add a new category
              </Link>
              <Link to="/addOwner" className="a-button-history margin-right-10">
                Add a new owner
              </Link>
            </div>
          </div>
        </div>
        <div className="a-spacing-large"></div>
        {/* Listing Page  */}
        <div className="container-fluid browsing-history">
          <div className="row">
            {products.map(product => (
              <div
                key={product._id}
                className="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb"
              >
                <div className="history-box">
                  {/* Product Image  */}
                  <a href="" className="a-link-normal">
                    <img src={product.image} alt="" className="img-fluid" />
                  </a>
                  {/* Product Title  */}
                  <div className="a-spacing-top-base asin-title">
                    <span className="a-text-normal">
                      <div className="p13n-sc-truncated">{product.title}</div>
                    </span>
                  </div>
                  {/* Product Rating  */}
                  <div className="a-row">
                    <a href="">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </a>
                    <span className="a-letter-space"></span>
                    <span className="a-color-tertiary a-size-small asin-review">
                      (19)
                    </span>
                  </div>
                  {/* Product Price  */}
                  <div className="a-row">
                    <span className="a-size-base a-color-price">
                      <span className="p13n-sc-price">${product.price}</span>
                    </span>
                  </div>
                  {/* Product Buttons  */}
                  <div className="a-row">
                    <Link
                      to={`/products/${product._id}`}
                      className="a-button-history margin-right-10"
                    >
                      Update
                    </Link>
                    <button
                      onClick={this.handleDelete.bind(this, product._id)}
                      className="a-button-history margin-right-10"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  Admin
);
