import React from "react";

const Herbs = () => {
  return (
    <main class="herbs">
      
      {/* <!-- ----------------Herbs Layout------------- --> */}
      <section class="herbs-layout">
        <img src="" alt="herbs layout image" />
        <div class="content">
          <h1>HERBS</h1>
        </div>
      </section>

      {/* <!-- ----------------Herbs Description------------- --> */}
      <section class="herbs-desc">
        <div class="container">
          <p>
            Elevate your culinary creations with our freeze-dried herbs, perfect
            for those who appreciate the finer expressions of flavor. Whether
            you are a chef looking to experiment with new tastes or a business
            aiming to enhance your product line, our selection offers a wide
            variety of possibilities. From the freshness-seeking individual to
            the creative professional, our freeze-dried herbs promise an
            aromatic journey that adds depth and character to any dish.
          </p>
        </div>
      </section>


      {/* <!-- ----------------Herbs List------------- --> */}
      <section class="herbs-grid">
        <div class="container">
          <div class="card">
            <img src="" alt="Garlic" />
            <div>
              <h2>GARLIC</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Thyme" />
            <div>
              <h2>THYME</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Basil" />
            <div>
              <h2>BASIL</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Cilantro" />
            <div>
              <h2>CILANTRO</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Shallots" />
            <div>
              <h2>SHALLOTS</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Sage" />
            <div>
              <h2>SAGE</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Terragon" />
            <div>
              <h2>TARRAGON</h2>
            </div>
          </div>
          <div class="card">
            <img src="" alt="Cove Leaf" />
            <div>
              <h2>COVE LEAF</h2>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ----------------Herbs Contact------------- --> */}
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

export default Herbs;
