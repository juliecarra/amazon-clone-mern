import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  fetchProductsById,
  fetchProductReviews,
} from "../../actions";
import ReviewSection from "../../components/ReviewSection";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      cartLength: 0,
      quantity: 0,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProductsById(id);
    this.props.fetchProductReviews(id);
  }

  HandleAddToCart = () => {
    this.props.addToCart(this.props.product);
    console.log(this.props.product);
  };

  render() {
    const { product, reviews } = this.props;

    return (
      <main>
        <div className="a-spacing-top-medium"></div>
        <div className="container-fluid">
          <div className="wayfinding-breadcrumbs-container">
            <ul className="a-unordered-list a-horizontal a-size-small">
              <li>
                <span className="a-list-item">
                  <a className="a-link-normal a-color-tertiary" href="#">
                    {product.category && product.category.type}{" "}
                  </a>
                </span>
              </li>
              <li>
                <span className="a-list-item">></span>
              </li>
              <li>
                <span className="a-list-item">
                  <a className="a-link-normal a-color-tertiary" href="#">
                    {product.title}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="dp-container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="leftCol">
                  <div clas="imgBlock">
                    <div className="eBooksimg">
                      <img
                        src={product.image}
                        className="img-fluid"
                        style={{ maxWidth: "94%" }}
                      />
                    </div>
                  </div>

                  <div className="authorFollow">
                    <hr className="a-divider-normal" />
                    <h1 className="authorFollowHeading">Follow The Author</h1>
                    <div className="a-spacing-top-small">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <div className="smallAuthorImageContainer">
                            <a href="#">
                              <img
                                src={product.owner && product.owner.image}
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                          <div className="authorNameCol">
                            <a href="#">
                              {product.owner && product.owner.name}
                            </a>
                          </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="authorBtn mt-2">
                            <a href="#">
                              <span className="btnFollow">
                                <span className="a-btn-inner">
                                  <button className="a-btn-text">
                                    + Follow
                                  </button>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="centerCol">
                  <div className="titleDiv">
                    <h1 className="productTitle">
                      <span className="largeTitle">{product.title}</span>
                      <span className="smallTitle"> Paperback</span>
                    </h1>
                  </div>

                  <div className="bylineinfo">
                    by
                    <a href="#" className="authorName">
                      {" "}
                      {product.owner && product.owner.name}
                      <i
                        className="fas fa-chevron-down"
                        style={{
                          fontSize: "8px !important",
                          color: "#555 !important",
                        }}
                      ></i>
                    </a>{" "}
                    (Author)
                  </div>
                  <div className="reviewGroup"></div>
                  <hr style={{ marginTop: "10px" }} />

                  <div className="mediaMatrix">
                    <div className="formats">
                      <a href="#" className="link-expander">
                        >
                        <span className="tmmShowPrompt">
                          See all 18 formats and editions
                        </span>
                      </a>
                      <ul>
                        <li
                          className="swatchElement"
                          style={{ width: "117px" }}
                        >
                          <span className="a-list-item">
                            <span className="a-button-toggle">
                              <span className="a-button-inner">
                                <a href="#" className="a-button-text">
                                  <span>Kindle</span>
                                  <br />
                                  <span className="a-color-secondary">-</span>
                                </a>
                              </span>
                            </span>
                            <span className="tmm-olp-links"></span>
                            <span className="tmm-olp-links">
                              <a href="#" className="a-size-mini">
                                <span className="kcpAppBox">
                                  <span className="a-declarative">
                                    Read with Our
                                    <span className="a-text-bold">
                                      Free App
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </span>
                          </span>
                        </li>

                        <li
                          className="swatchElement"
                          style={{ width: "117px" }}
                        >
                          <span className="a-list-item">
                            <span className="a-button-toggle">
                              <span className="a-button-inner">
                                <a href="#" className="a-button-text">
                                  <span>
                                    <img
                                      src="/img/audibleLogo.png"
                                      className="img-fluid"
                                      style={{ width: "20px" }}
                                    />
                                    Audible
                                  </span>
                                  <br />
                                  <span className="a-color-secondary">-</span>
                                </a>
                              </span>
                            </span>
                            <span className="tmm-olp-links"></span>
                            <span className="tmm-olp-links">
                              <a href="#" className="a-size-mini">
                                <span className="kcpAppBox">
                                  <span className="a-declarative">
                                    <span className="a-text-bold">
                                      Free App
                                    </span>{" "}
                                    with your Audible Trial
                                  </span>
                                </span>
                              </a>
                            </span>
                          </span>
                        </li>

                        <li
                          className="swatchElement"
                          style={{ width: "117px" }}
                        >
                          <span className="a-list-item">
                            <span className="a-button-toggle">
                              <span className="a-button-inner">
                                <a href="#" className="a-button-text">
                                  <span>Paperback</span>
                                  <br />
                                  <span className="a-color-secondary">-</span>
                                </a>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bookDescription">
                    <div className="bookDescriptionInner">
                      {product.description}
                    </div>
                  </div>

                  <div className="aboutEbooksFeature">
                    <hr />
                    <div className="row">
                      <div className="col-sm-4 mb-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="combinedBuyBox">
                  <div className="buyBox">
                    <div className="a-section">
                      <div className="clearfix">
                        <div className="float-left"></div>

                        <div className="float-right">
                          <span className="a-size-medium a-color-price offer-price a-text-normal">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="a-section a-spacing-small a-spacing-top-micro">
                      <div className="row">
                        <span className="a-color-base buyboxShippingLabel"></span>
                      </div>
                    </div>
                    <div className="a-section a-spacing-small">
                      <div className="a-section a-spacing-none">
                        <span className="a-size-medium a-color-success">
                          In Stock
                        </span>
                      </div>
                      <div className="a-section a-spacing-mini">
                        Ships from and sold by Amazon.com
                      </div>
                    </div>

                    <div className="a-section">
                      <div
                        className="a-button-stack"
                        onClick={this.HandleAddToCart}
                      >
                        <span className="a-spacing-small a-button-primary a-button-icon">
                          <span className="a-button-inner">
                            <i className="a-icon a-icon-cart"></i>
                            <input
                              type="submit"
                              name="submit.add-to-cart"
                              className="a-button-input"
                            />
                            <span className="a-button-text">Add to Cart</span>
                          </span>
                        </span>
                      </div>
                      <div
                        className="a-button-stack"
                        onClick={this.HandleAddToCart}
                      >
                        <span className="a-spacing-small a-button-primary a-button-icon">
                          <span className="a-button-inner">
                            <i className="a-icon a-icon-buynow"></i>
                            <input
                              type="submit"
                              name="submit.add-to-cart"
                              className="a-button-input"
                            />
                            <span className="a-button-text">Buy Now</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="a-row">
                      <div className="a-spacing-top-small">
                        <div className="a-section a-spacing-none">
                          <div className="a-section a-spacing-none a-spacing-top-mini">
                            This item ships <strong>Worlwide.</strong>{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <hr />
                    <div className="a-section">
                      <div className="clearfix">
                        <div className="float-left"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="kcpAppBaseBox text-center">
                  <img src="/img/readyondevice.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <br />

            <div className="books-entity-teaser">
              <div className="bucket">
                <ReviewSection product={product} reviews={reviews} />

                <h2>More about the author</h2>
                <div className="content">
                  <div className="row">
                    <div className="col-md-2 col-sm-4 col-4">
                      <div className="authorContent">
                        <div className="authorImageSingle">
                          <a href="#">
                            <img
                              src={product.owner && product.owner.image}
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="authorFollow">
                          <button className="followButton" type="button">
                            <span className="pr-fb-icon"></span>
                            <span className="pr-fb-text">Follow</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-10 col-sm-8 col-8 pl-0">
                      <div className="mainContent">
                        <h3>Biography</h3>
                        <div id="authorBio">
                          {product.owner && product.owner.about}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    reviews: state.reviews.reviews,
    products: state.products.products,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  fetchProductsById,
  fetchProductReviews,
  addToCart,
})(ProductItem);
