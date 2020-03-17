import React from "react";

const FeaturedProduct = () => {
  return (
    <main class="mainContent">
      {/* <div class="unified_widget pageBanner">
        <h1>Books</h1>
        <p>
          <b>
            Browse for more Books
            <a href="">leaders of notable people</a>, or
            <a href="">Fantasy books</a> like harry potter or Game of thrones
            <a href="">Best Fantasy books of the year so far</a>
          </b>
        </p>
      </div> */}
      <div class="bx-root">
        <div class="row">
          <div class="col-sm-5 text-center">
            <div class="bx-root-image"></div>
          </div>
          <div class="col-sm-7 auto">
            <div class="bx-root-dtls"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProduct;
