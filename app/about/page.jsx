import { AboutNav } from "@/components/navbar";

const About = () => {
  return (
    <main>
      <nav>
        <AboutNav />
      </nav>
      {/* <!-- -----About Layout----- --> */}
      <section class="about-layout">
        <img src="./leaf1.png" class="leaf-left" alt="about heroe image" />
        <div class="container">
          <h1 class="h-bold">LEAVING A MARK IN THE</h1>
          <h1 class="h-semibold">FOOD PRESERVATION INDUSTRY</h1>
        </div>
        <img src="./leaf2.png" class="leaf-right" alt="about heroe image" />
      </section>

      {/* <!-- -----Who We Are----- --> */}
      <section class="about-who-we-are margins">
        <div class="center">
          <div class="border-line"></div>
          <div class="heading heading-center">
            <h1 class="h-semibold pr">WHO</h1>
            <h1 class="h-bold">WE ARE</h1>
          </div>
          <div class="border-line"></div>
        </div>
        <div class="container">
          <p>
            Freezedry Harvest Kenya EPZ Ltd is a freeze - drying facility that
            specializes in the preservation of fruits, herbs, and leafy greens
            while maintaining their nutritional value. Our journey begins with a
            simple question, how could we freeze the moment of freshness without
            compromising the essence? This query ignited the vision behind our
            company, a venture committed to transforming fruits, vegetables, and
            herbs into premium, long-lasting products through advanced
            freeze-drying technology.
          </p>
          <p>
            We take pride in creating meaningful job opportunities for the local
            community and contributing to economic growth. Beyond our
            facilities, we develop partnerships with local farmers, fostering
            sustainable practices that echo our commitment to the land and its
            workers. At Freezedry Harvest Kenya EPZ Ltd, each product is a
            testament to our dedication to excellence and the belief that
            innovation can be a force for community empowerment.
          </p>
        </div>
      </section>

      {/* <!-- -----OUR MISSION----- --> */}
      <section class="about-mission margins">
        <div class="center">
          <div class="border-line"></div>
          <div class="heading heading-center">
            <h1 class="pr h-semibold">OUR</h1>
            <h1 class="h-bold">MISSION</h1>
          </div>
          <div class="border-line"></div>
        </div>
        <div class="container">
          <div class="text">
            <p>
              At Freezedry Harvest Kenya EPZ Ltd, our mission is to consistently
              provide high-quality products, stay at the forefront of
              freeze-drying technology, and steadfastly support local farmers.
              We aim to elevate food preservation standards, embracing
              innovation while nurturing sustainable partnerships with local
              growers for a resilient and impactful future.
            </p>
          </div>
          <div class="image">
            <img
              src="./aboutmission.png"
              alt="our mission image"
              loading="lazy"
            />
          </div>
        </div>
        <img src="./leaf2.png" class="about-leaf-right" alt="about heroe image" />
      </section>

      {/* <!-- -----OUR VALUES----- --> */}
      <section class="about-values margins">
        <div class="center">
          <div class="border-line"></div>
          <div class="heading heading-center">
            <h1 class="pr h-semibold">OUR</h1>
            <h1 class="h-bold">VALUES</h1>
          </div>
          <div class="border-line"></div>
        </div>
        <div>
          <img
            class="small-hidden"
            src="./Values.png"
            alt="our values icons"
            loading="lazy"
          />
          <div class="container">
            <div class="column">
              <img
                class="large-hidden"
                src="./Value 1.png"
                alt="our values icons"
                loading="lazy"
              />
              <h1>Premium</h1>
              <p>
                The brand exudes an air of premium quality & exclusivity. It is
                associated with the finest freeze-dried products and sets a
                standard of excellence that stands out in the market.
              </p>
            </div>
            <div class="column">
              <img
                class="large-hidden"
                src="./Value 2.png"
                alt="our values icons"
                loading="lazy"
              />
              <h1>Reliable</h1>
              <p>
                The brand exudes an air of premium quality & exclusivity. It is
                associated with the finest freeze-dried products and sets a
                standard of excellence that stands out in the market.
              </p>
            </div>
            <div class="column">
              <img
                class="large-hidden"
                src="./Value 3.png"
                alt="our values icons"
                loading="lazy"
              />
              <h1>Sophisticated</h1>
              <p>
                The brand exudes an air of premium quality & exclusivity. It is
                associated with the finest freeze-dried products and sets a
                standard of excellence that stands out in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
