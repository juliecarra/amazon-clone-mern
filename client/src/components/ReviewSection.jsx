import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ReviewSection extends Component {
  render() {
    const { reviews, product } = this.props;

    return (
      <div>
        <hr />
        <div className="reviewsMedley">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <a href="#" className="a-color-base">
                <h2>{reviews.length} customer reviews</h2>
              </a>

              <div className="clearfix">
                <div className="float-left">
                  <hr className="a-spacing-large" />
                </div>
              </div>
              <h3 className="a-spacing-micro">Review this product</h3>
              <div className="a-row a-spacing-large">
                Share your thoughts with other customers
              </div>
              <div className="a-row">
                <span className="a-button-base writeReviewButton cm-cr-button-wide">
                  <span className="a-button-inner">
                    <Link
                      to={`/reviews/${product._id}`}
                      className="a-button-text"
                    >
                      Write a customer review
                    </Link>
                  </span>
                </span>
              </div>
              <div className="clearfix">
                <div className="float-left">
                  <hr className="mt-4 a-spacing-large" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12">
              <div className="reviews-image-gallery">
                <h3>Customer images</h3>

                <div className="a-spacing-small a-spacing-top-small">
                  {reviews.map((review) => (
                    <img
                      className="img-fluid"
                      width="22.5%"
                      key={review._id}
                      src={review.image}
                    />
                  ))}
                </div>
                <div>
                  <a href="#">See all customer images</a>
                </div>
              </div>
              <div className="cr-lighthut">
                <h3>Read reviews that mention</h3>
                <div className="cr-lighthouse-terms">
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">well written</span>
                    </a>
                  </span>
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">great read</span>
                    </a>
                  </span>
                  <br />
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">must read</span>
                    </a>
                  </span>
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">great book</span>
                    </a>
                  </span>
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">
                        highly recomended
                      </span>
                    </a>
                  </span>
                  <br />
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">well searched</span>
                    </a>
                  </span>
                  <span className="cr-lighthouse-span">
                    <a href="#">
                      <span className="cr-lighthouse-term">long term</span>
                    </a>
                  </span>
                </div>
              </div>
              <div className="cr-widget-focalreviews">
                <div className="card-padding">
                  <div className="review-header">
                    <h3>
                      <span className="a-size-base"></span>
                    </h3>
                  </div>
                  <div className="review-sort-type">
                    <span className="a-dropdown-container">
                      <span className="a-button a-button-dropdown">
                        <span className="a-button-inner">
                          <span className="a-button-text">
                            <span className="a-dropdown-prompt">
                              Top Reviews
                            </span>
                          </span>
                          <i className="a-icon a-icon-dropdown"></i>
                        </span>
                      </span>
                    </span>
                  </div>

                  {reviews.map((review) => (
                    <div className="review-body" key={review._id}>
                      <div className="genome-widget">
                        <a href="#">
                          <div className="profile-avatar">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                          </div>

                          <div className="profile-content">
                            <span className="a-profile-name">
                              {review.user && review.user.name}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="a-row">
                        <a href="#">
                          <i style={{ color: "#FADA5E" }}>
                            {"★".repeat(review.rating)}{" "}
                          </i>
                        </a>
                        <span className="a-letter-space"></span>

                        <a href="#" className="review-title">
                          {review.headline}
                        </a>
                      </div>

                      <div className="review-data">
                        <span className="a-color-secondary">
                          Format: Hardcover
                        </span>
                        <div
                          style={{
                            width: "1px !important",
                            height: "15px !important",
                            backgroundColor: "#ddd",
                            display: "inline-block",
                            margin: "0px 5px -3px 5px",
                          }}
                        ></div>
                        <span className="avp-badge a-color-state">
                          Verified Purchase
                        </span>
                      </div>

                      <div className="review-body">
                        <span>{review.body}</span>
                      </div>
                      <div className="review-comments">
                        <div className="a-spacing-small">
                          <span className="a-size-base a-color-tertiary">
                            60 people found this helpful
                          </span>
                        </div>
                        <div className="cr-helpful-button">
                          <span className="a-button-base">
                            <span className="a-button-inner">
                              <a href="#" className="a-button-text">
                                <div className="cr-helpful-text">Helpful</div>
                              </a>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="review-footer">
                <div className="a-row">
                  <span
                    className="a-button a-button-base writeReviewButton"
                    id="a-autoid-15"
                  >
                    <span className="a-button-inner">
                      <Link
                        to={`/reviews/${product._id}`}
                        className="a-button-text"
                        role="button"
                      >
                        Write a customer review
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(withRouter(ReviewSection));
