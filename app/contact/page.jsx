import React from "react";

const Contact = () => {
  return (
    <main class="contact">
      {/* <!-- --------------Contact Layout---------- --> */}
      <section class="contact-layout">
        <div class="container">
          <h1 class="h-bold">LET`S TALK</h1>
          <h1 class="h-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </h1>
        </div>
      </section>

      {/* <!-- ---------------Contact Form----------------- --> */}
      <section class="contact-form margins">
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
      </section>
    </main>
  );
};

export default Contact;
