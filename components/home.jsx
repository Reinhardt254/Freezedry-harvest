import React from "react";

const HomePage = () => {
  return (
    <main>
      <section class="home-layout">
        <img src="./HeroImage.png" alt="" class="" />
        <div class="container">
          <h1 class="h-bold">FREEZEDRY HARVEST</h1>
          <h3 class="h-semibold">KENYA EPZ LTD</h3>
          <h5 class="h-bold">FROM SEED TO FORK</h5>

          <div class="input">
            <input type="text" placeholder="What would you like to buy" />
            <a class="button-solid">Subscribe</a>
          </div>
        </div>
      </section>

{/* <!-- -----------Specialize----------- -->*/}
      <section class="specialize">
        <div class="heading heading-center">
          <h1 class="pr h-semibold">WE</h1>
          <h1 class="h-bold">SPECIALIZE IN</h1>
        </div>
        <div class="container">
          <div class="card">
            <img src="./Fruits Icons.png" alt="Fruits Icon" class="" />
            <h1 class="subheading">Fruits</h1>
            <p>
              Our freeze-dried fruits boast an exceptional preservation of
              natural flavors, vibrant colors, and nutritional richness.
            </p>
            <a>Read More</a>
          </div>

          <div class="card">
            <img src="./Herbs Icon.png" alt="Herbs Icon" class="" />
            <h1 class="subheading">Herbs</h1>
            <p>
              With an impeccable retention of their original aromatic potency
              and flavor, our herbs provide a convenient and long-lasting
              solution preserving its nutritional value.
            </p>
            <a>Read More</a>
          </div>

          <div class="card">
            <img
              src="./Leafy greens Icon.png"
              alt="Leafy greens Icon"
              class=""
            />
            <h1 class="subheading">Leafy Greens</h1>
            <p>
              Preserving the essence of fresh greens, our freeze-dried leafy
              greens retain their vibrant color, nutritional integrity and
              exceptional flavor.
            </p>
            <a>Read More</a>
          </div>
        </div>
      </section>

      <section class="who-we-are">
        <div class="image">
          <img src="./Granola.png" alt="who we are image" class="" />
        </div>
        <div class="container">
          <div class="heading heading-center">
            <h1 class="h-semibold pr">WHO</h1>
            <h1 class="h-bold">WE ARE</h1>
          </div>
          <p>
            We are on a mission to enhance the longetivity of natural
            ingredients, prioritizing the preservation of their nutritional
            richness, distint flavor profiles, and aromatic qualities. This
            commitment drives us to employ state-of-art technology, allowing us
            to transform everyday natural foods into premium products that offer
            a fusion of extended shelf life and quality.
          </p>
          <a>Read More</a>
        </div>
      </section>

      <section class="home-newsletter">
        <img src="" alt="" />
        <div class="container">
          <div class="heading heading-center">
            <h1 class="h-semibold pr">SIGN UP FOR OUR</h1>
            <h1 class="h-bold">NEWSLETTER</h1>
          </div>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div class="input">
            <input placeholder="Enter Your Email" type="text" />
            <a>subscribe</a>
          </div>
        </div>
      </section>

{/* <!-- ---------Home Contact--------  --> */}
      <section class="home-contact">
        <div class="heading heading-center">
          <h1 class="h-semibold pr">CONTACT</h1>
          <h1 class="h-bold">US</h1>
        </div>
        <div class="container">
          <div class="column text">
            <img src="./envelope icon.png" alt="message icon" />
            <h1>Request A Quote</h1>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry`s standard dummy text
              ever since 1500s.
            </p>
            <div class="phone">
              <img src="Phone Icon.png" alt="phone icon" />
              <div>
                <p>Call Us Today</p>
                <p class="h-bold">+91 123 456 7890</p>
              </div>
            </div>
          </div>
          <div class="column form">
            <form>
              <div class="row center">
                <input placeholder="Enter Your Email" type="text" />
                <input placeholder="Enter Your Email" type="text" />
              </div>
              <div class="row center">
                <input placeholder="Enter Your Email" type="text" />
                <input placeholder="Enter Your Email" type="text" />
              </div>
              <div class="row center">
                <textarea placeholder="Enter Your Email" type="text" />
              </div>
              <div class="row center">
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
