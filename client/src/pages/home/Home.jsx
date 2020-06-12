import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { fetchProducts } from "../../actions";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <main className="listingPage">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-2 col-lg-3 md-4 col-sm-4 side"
              style={{ borderRight: "1px solid #ddd" }}
            >
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                Popular in Books
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">Award Winners</p>
                <p className="sidebar">Bargain Books</p>
                <p className="sidebar">Best Books of the Month</p>
                <p className="sidebar">Best Books of 2019</p>
                <p className="sidebar">Celebrity Picks</p>
                <p className="sidebar">Books in Spanish</p>
                <p className="sidebar">Children's Books</p>
                <p className="sidebar">Deals in Books</p>
                <p className="sidebar">Prime Book Box</p>
                <p className="sidebar">Top 20 Lists in Books</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                More in Books
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">100 Books to Read in a Lifetime</p>
                <p className="sidebar">Amazon Book Review Blog</p>
                <p className="sidebar">Amazon Books on Facebook</p>
                <p className="sidebar">Amazon Books on Twitter</p>
                <p className="sidebar">Amazon Books Stores</p>
                <p className="sidebar">Amazon First Reads</p>
                <p className="sidebar">Book Club Picks</p>
                <p className="sidebar">From Page to Screen</p>
                <p className="sidebar">Start a New Series</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>Textbooks</h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">Textbooks Store</p>
                <p className="sidebar">Textbook Rentals</p>
                <p className="sidebar">Sell Us Your Books</p>
                <p className="sidebar">Kindle eTextbooks</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                Kindle & Audible
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">Audible Audiobooks</p>
                <p className="sidebar">Kindle eBooks</p>
                <p className="sidebar">Kindle Deals</p>
                <p className="sidebar">Kindle Unlimited</p>
                <p className="sidebar">Prime Reading</p>
              </div>
              <br />
              <h1
                style={{ fontWeight: "700", fontSize: "16px", color: "grey" }}
              >
                Show results for
              </h1>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                New Releases
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">Last 30 days</p>
                <p className="sidebar">Last 90 days</p>
                <p className="sidebar">Coming Soon</p>
              </div>
              <br />
              <hr />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>Books</h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p className="sidebar">Arts & Photography</p>
                <p className="sidebar">Biographies & Memoirs</p>
                <p className="sidebar">Business & Money</p>
                <p className="sidebar">Calendars</p>
                <p className="sidebar">Children's Books</p>
                <p className="sidebar">Christian Books & Bibles</p>
                <p className="sidebar">Comics & Graphic Novels</p>
                <p className="sidebar">Computers & Technology</p>
                <p className="sidebar">Cookbooks, Food & Wine</p>
                <p className="sidebar">Crafts, Hobbies & Home</p>
                <p className="sidebar">Education & Teaching</p>
                <p className="sidebar">Engineering & Transportation</p>
                <p className="sidebar">Health, Fitness & Dieting</p>
                <p className="sidebar">History</p>
                <p className="sidebar">Humor & Entertainment</p>
                <p className="sidebar">Law</p>
                <p className="sidebar">Literature & Fiction</p>
                <p className="sidebar">Medical Books</p>
                <p className="sidebar">Mystery, Thriller & Suspense</p>
                <p className="sidebar">Parenting & Relationships</p>
                <p className="sidebar">Politics & Social Sciences</p>
                <p className="sidebar">Reference</p>
                <p className="sidebar">Religion & Spirituality</p>
                <p className="sidebar">Romance</p>
                <p className="sidebar">Science & Math</p>
                <p className="sidebar">Science Fiction & Fantasy</p>
                <p className="sidebar">Self-Help</p>
                <p className="sidebar">Sports & Outdoors</p>
                <p className="sidebar">Teen & Young Adult</p>
                <p className="sidebar">Test Preparation</p>
                <p className="sidebar">Travel</p>
              </div>
              <br />
              <hr />
              <h1
                style={{ fontWeight: "700", fontSize: "16px", color: "grey" }}
              >
                Refine by
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <h1 style={{ fontWeight: "700", fontSize: "13px" }}>Format</h1>
                <br />
                <p className="sidebar">Paperback</p>
                <p className="sidebar">Hardcover</p>
                <p className="sidebar">Kindle Edition</p>
                <p className="sidebar">Large Print</p>
                <p className="sidebar">Audible Audiobook</p>
                <p className="sidebar">Printed Access Code</p>
                <p className="sidebar">Loose Leaf</p>
                <p className="sidebar">Audio CD</p>
                <p className="sidebar">Board Book</p>
              </div>
            </div>

            <div className="col-xl-10 col-lg-9 md-8 col-sm-8">
              <div className="mainResults">
                <ul className="s-result-list">
                  {products.map((product) => (
                    <li className="s-result-item celwidget" key={product._id}>
                      <div>
                        <div className="row" style={{ marginTop: "15px" }}>
                          <div className="col-sm-3 text-center">
                            <Link to={`/product/${product._id}`}>
                              <img
                                src={product.image}
                                alt
                                className="img-fluid img-float"
                                style={{
                                  height: "250px",
                                }}
                              />
                            </Link>
                          </div>
                          <div
                            className="col-sm-9"
                            style={{ marginTop: "25px" }}
                          >
                            <div className="a-row a-spacing-small">
                              <a href className="a-link-normal">
                                <Link to={`/product/${product._id}`}>
                                  <h2
                                    className="a-size-medium"
                                    style={{
                                      color: "black",
                                    }}
                                  >
                                    {product.title}
                                    <span className="a-letter-space"></span>
                                    <span className="a-letter-space"></span>
                                  </h2>
                                </Link>
                              </a>
                            </div>

                            <div className="a-row a-spacing-small">
                              <span className="a-size-small a-color-secondary">
                                By{" "}
                              </span>
                              <span className="a-size-small a-color-secondary">
                                <a
                                  href="#"
                                  className="a-link-normal a-text-normal"
                                  style={{ color: "#555" }}
                                >
                                  {product.owner.name}
                                </a>
                              </span>
                            </div>

                            <div className="a-row">
                              <span className="a-size-small">
                                Ships worldwide
                              </span>
                            </div>

                            <div className="row">
                              <div className="col-sm-7">
                                <div className="a-row a-spacing-none">
                                  <a
                                    href="#"
                                    className="a-link-normal a-text-normal"
                                    style={{ color: "#555" }}
                                  >
                                    Hardcover
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="a-row a-spacing-none">
                              <a
                                href="#"
                                className="a-link-normal a-text-normal"
                              >
                                <span className="a-color-base sx-zero-spacing">
                                  <span className="sx-price sx-price-large">
                                    <sup
                                      className="sx-price-currency"
                                      style={{
                                        color: "#B12704",
                                        fontSize: "14px",
                                      }}
                                    >
                                      ${product.price}
                                    </sup>
                                  </span>
                                </span>
                              </a>
                              <span className="a-letter-space"></span>
                            </div>

                            <div className="a-row a-spacing-none">
                              <span className="a-size-small a-color-secondary">
                                Free with audible Trial
                              </span>
                            </div>
                            <br />
                            <hr />

                            <span className="a-size-small a-color-secondary">
                              Other Formats:
                              <span className="a-letter-space"></span>
                              <a
                                style={{ color: "rgb(228, 121, 17)" }}
                                href="#"
                                className="a-size-small a-link-normal a-text-normal"
                              >
                                Audio CD
                              </a>
                            </span>
                          </div>

                          <div className="col-sm-5">
                            <div className="a-row a-spacing-mini"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
    products: state.products.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(Home);
