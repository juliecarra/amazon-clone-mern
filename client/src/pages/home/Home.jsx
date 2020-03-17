import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import FeaturedProduct from "../../components/FeaturedProduct";

import { fetchProducts } from "../../actions";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <main class="listingPage">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-xl-2 col-lg-3 md-4 col-sm-4 side"
              style={{ borderRight: "1px solid #ddd" }}
            >
              {/* Sidebar */}

              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                Popular in Books
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p class="sidebar">Award Winners</p>
                <p class="sidebar">Bargain Books</p>
                <p class="sidebar">Best Books of the Month</p>
                <p class="sidebar">Best Books of 2019</p>
                <p class="sidebar">Celebrity Picks</p>
                <p class="sidebar">Books in Spanish</p>
                <p class="sidebar">Children's Books</p>
                <p class="sidebar">Deals in Books</p>
                <p class="sidebar">Prime Book Box</p>
                <p class="sidebar">Top 20 Lists in Books</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                More in Books
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p class="sidebar">100 Books to Read in a Lifetime</p>
                <p class="sidebar">Amazon Book Review Blog</p>
                <p class="sidebar">Amazon Books on Facebook</p>
                <p class="sidebar">Amazon Books on Twitter</p>
                <p class="sidebar">Amazon Books Stores</p>
                <p class="sidebar">Amazon First Reads</p>
                <p class="sidebar">Book Club Picks</p>
                <p class="sidebar">From Page to Screen</p>
                <p class="sidebar">Start a New Series</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>Textbooks</h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p class="sidebar">Textbooks Store</p>
                <p class="sidebar">Textbook Rentals</p>
                <p class="sidebar">Sell Us Your Books</p>
                <p class="sidebar">Kindle eTextbooks</p>
              </div>
              <br />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>
                Kindle & Audible
              </h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p class="sidebar">Audible Audiobooks</p>
                <p class="sidebar">Kindle eBooks</p>
                <p class="sidebar">Kindle Deals</p>
                <p class="sidebar">Kindle Unlimited</p>
                <p class="sidebar">Prime Reading</p>
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
                <p class="sidebar">Last 30 days</p>
                <p class="sidebar">Last 90 days</p>
                <p class="sidebar">Coming Soon</p>
              </div>
              <br />
              <hr />
              <h1 style={{ fontWeight: "700", fontSize: "13px" }}>Books</h1>
              <br />
              <div style={{ lineHeight: "5px;" }}>
                <p class="sidebar">Arts & Photography</p>
                <p class="sidebar">Biographies & Memoirs</p>
                <p class="sidebar">Business & Money</p>
                <p class="sidebar">Calendars</p>
                <p class="sidebar">Children's Books</p>
                <p class="sidebar">Christian Books & Bibles</p>
                <p class="sidebar">Comics & Graphic Novels</p>
                <p class="sidebar">Computers & Technology</p>
                <p class="sidebar">Cookbooks, Food & Wine</p>
                <p class="sidebar">Crafts, Hobbies & Home</p>
                <p class="sidebar">Education & Teaching</p>
                <p class="sidebar">Engineering & Transportation</p>
                <p class="sidebar">Health, Fitness & Dieting</p>
                <p class="sidebar">History</p>
                <p class="sidebar">Humor & Entertainment</p>
                <p class="sidebar">Law</p>
                <p class="sidebar">Literature & Fiction</p>
                <p class="sidebar">Medical Books</p>
                <p class="sidebar">Mystery, Thriller & Suspense</p>
                <p class="sidebar">Parenting & Relationships</p>
                <p class="sidebar">Politics & Social Sciences</p>
                <p class="sidebar">Reference</p>
                <p class="sidebar">Religion & Spirituality</p>
                <p class="sidebar">Romance</p>
                <p class="sidebar">Science & Math</p>
                <p class="sidebar">Science Fiction & Fantasy</p>
                <p class="sidebar">Self-Help</p>
                <p class="sidebar">Sports & Outdoors</p>
                <p class="sidebar">Teen & Young Adult</p>
                <p class="sidebar">Test Preparation</p>
                <p class="sidebar">Travel</p>
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
                <p class="sidebar">Paperback</p>
                <p class="sidebar">Hardcover</p>
                <p class="sidebar">Kindle Edition</p>
                <p class="sidebar">Large Print</p>
                <p class="sidebar">Audible Audiobook</p>
                <p class="sidebar">Printed Access Code</p>
                <p class="sidebar">Loose Leaf</p>
                <p class="sidebar">Audio CD</p>
                <p class="sidebar">Board Book</p>
              </div>
            </div>
            {/* Main Content */}
            <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
              <FeaturedProduct />
              <div class="mainResults">
                <ul class="s-result-list">
                  {products.map(product => (
                    <li
                      class="s-result-item celwidget"
                      v-for="product in products"
                      key={product._id}
                    >
                      {/* <div class="s-item-container">
                         Best Sellers
                        <div class="a-spacing-micro">
                          <div class="bestSeller">
                            <a href>Best Seller</a>
                          </div>
                        </div>
                      </div>  */}
                      <div>
                        <div class="row" style={{ marginTop: "15px" }}>
                          {/* Image */}
                          <div class="col-sm-3 text-center">
                            <Link to={`/product/${product._id}`}>
                              <img
                                src={product.image}
                                alt
                                class="img-fluid img-float"
                                style={{
                                  // float: "right",
                                  height: "250px"
                                  // padding: "10px"
                                }}
                              />
                            </Link>
                            {/* </div> */}
                          </div>
                          <div class="col-sm-9" style={{ marginTop: "25px" }}>
                            <div class="a-row a-spacing-small">
                              {/* Title and Date  */}
                              <a href class="a-link-normal">
                                <Link to={`/product/${product._id}`}>
                                  <h2 class="a-size-medium">
                                    {product.title}
                                    <span class="a-letter-space"></span>
                                    <span class="a-letter-space"></span>
                                    {/* <span class="a-size-small a-color-secondary">
                                    21 Décembre 2019
                                  </span> */}
                                  </h2>
                                </Link>
                              </a>
                            </div>
                            {/* Author's Name  */}
                            <div class="a-row a-spacing-small">
                              <span class="a-size-small a-color-secondary">
                                By{" "}
                              </span>
                              <span class="a-size-small a-color-secondary">
                                <a href="#" class="a-link-normal a-text-normal">
                                  {product.owner.name}
                                </a>
                              </span>
                            </div>
                            {/* Shipment  */}
                            <div class="a-row">
                              <span class="a-size-small">Ships worldwide</span>
                            </div>
                            {/* Hardcover */}
                            <div class="row">
                              <div class="col-sm-7">
                                <div class="a-row a-spacing-none">
                                  <a
                                    href="#"
                                    class="a-link-normal a-text-normal"
                                    style={{ color: "#555" }}
                                  >
                                    Hardcover
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Price  */}
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                {/* <span class="a-offscreen">${product.price}</span> */}
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <sup
                                      class="sx-price-currency"
                                      style={{ color: "#B12704" }}
                                    >
                                      ${product.price}
                                    </sup>
                                    {/* <sup class="sx-price-whole">
                                      {product.price}
                                    </sup> */}
                                    {/* <sup class="sx-price-fractional">00</sup> */}
                                  </span>
                                </span>
                              </a>
                              <span class="a-letter-space"></span>
                              {/* <span class="a-size-base-plus a-color-secondary a-text-strike">
                                $90
                              </span> */}
                            </div>

                            {/* Audible Trial  */}
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">
                                Free with audible Trial
                              </span>
                            </div>
                            <br />
                            <hr />
                            {/* Other Format  */}
                            <span class="a-size-small a-color-secondary">
                              Other Formats:
                              <span class="a-letter-space"></span>
                              <a
                                href="#"
                                class="a-size-small a-link-normal a-text-normal"
                              >
                                Audio CD
                              </a>
                            </span>
                          </div>
                          {/* Ratings */}
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini">
                              {/* Star Ratings */}
                            </div>
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

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { fetchProducts })(Home);
