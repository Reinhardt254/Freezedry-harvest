import { ContactsNav } from "@/components/navbar";
import React from "react";

const Contact = () => {
  return (
    <main class="contact">
      <div>
        <ContactsNav />
      </div>
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
              <input placeholder="Name" type="text" required={true}/>
              <input placeholder="Email" type="text" required={true}/>
            </div>
            <div class="row center">
              <input placeholder="Name" type="text" required={true}/>
              <input placeholder="Subject" type="text" required={true}/>
            </div>
            <div class="row center">
              <textarea placeholder="Message" type="text" required={true}/>
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
