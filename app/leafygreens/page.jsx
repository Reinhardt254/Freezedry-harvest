import React from "react";

const LeafyGreens = () => {
  return (
    <main class="leafy">
      {/* <!-- ----------------leafy Layout------------- --> */}
      <section class="leafy-layout">
        <img src="" alt="leafy layout image" />
        <div class="content">
          <h1>LEAFY GREENS</h1>
        </div>
      </section>

      {/* <!-- ----------------leafy Description------------- --> */}
      <section class="leafy-desc">
        <div class="container">
          <p>
            Explore the nutritional richness of our freeze-dried leafy greens,
            designed for those seeking to incorporate a healthful solution into
            their product line or portfolio. Our freeze-dried leafy greens
            provide a versatile and vibrant addition, prioritizing its
            nutritional value without sacrificing taste and convenience.
          </p>
        </div>
      </section>

      {/* <!-- ----------------leafy List------------- --> */}
      <section class="leafy-grid">
        <div class="container">
          <div class="card">
            <img src="" alt="Garlic" />
            <div>
              <h2>SPINACH</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Thyme" />
            <div>
              <h2>TERERE</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Basil" />
            <div>
              <h2>KALE</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ----------------leafy Contact------------- --> */}
      <section class="products">
        <div>
          <h1 class="h-semibold">DO YOU WANT TO KNOW</h1>
          <div class="heading">
            <h1 class="pr h-semibold">MORE ABOUT</h1>
            <h1 class="h-bold">OUR PRODUCTS?</h1>
          </div>
          <div class="button">
            <a>Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeafyGreens;