import React from "react";

const Fruits = () => {
  return (
    <main class="fruits">
      {/* <!-- ----------Fruits Layout--------- --> */}
      <section class="fruits-layout">
        <img src="./HeroImage.png" alt="Fruits image" />
        <div class="content">
          <h1>FRUITS</h1>
        </div>
      </section>

      {/* <!-- ---------------Fruits Text------------- -->*/}
      <section class="fruits-desc margins">
        <p>
          Discover our freeze-dried fruits, carefully selected and preserved
          using cutting-edge freeze-drying technology. We offer a diverse
          selection that caters to individuals seeking unique and top-quality
          options. Whether you are a culinary enthusiast exploring new flavors
          or a business looking to add a touch of distinction to your offerings,
          our freeze-dried fruits promise a burst of flavor and versatility.
        </p>
      </section>

      {/* <!-- -------------Fruits Grid Display--------------- --> */}
      <section class="fruits-grid margins">
        <div class="container">
          <div class="card">
            <img src="Granola.png" alt="strawberry" />
            <h2>STRAWBERRY</h2>
          </div>
          <div class="card">
            <img src="Granola.png" alt="banana" />
            <h2>BANANA</h2>
          </div>
          <div class="card">
            <img src="Granola.png" alt="pineapple" />
            <h2>PINEAPPLE</h2>
          </div>
          <div class="card">
            <img src="Granola.png" alt="mangoe" />
            <h2>MANGOE</h2>
          </div>
        </div>
      </section>

      {/* <!-- ----------------Fruits Contact------------- --> */}
      <section class="products-contact margins">
        <div class="container heading">
          <h1 class="h-bold">DO YOU WANT TO KNOW</h1>
          <div class="heading-center">
            <h1 class="pr h-semibold">MORE ABOUT</h1>
            <h1 class="h-bold">OUR PRODUCTS?</h1>
          </div>
          <div class="button">
            <a class="button-solid">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fruits;
