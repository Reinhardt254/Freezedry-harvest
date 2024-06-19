import React from "react";

const Footer = () => {
  return (
    <div class="footer margins">
      <div class="container">
        <div class="column">
          {/* <h1>QUICK LINKS</h1> */}
          <div class="links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/fruits">Fruits</a>
            <a href="/leafygreens">Leafy Greens</a>
            <a href="/herbs">Herbs</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div class="column">
          {/* <h1>GET IN TOUCH</h1> */}
          <div class="row">
            <img src="./Icons/phone.png" class="icon" alt="phone number icon" />
            <p>+91 123 456 7890</p>
          </div>
          <div class="row">
            <img src="./Icons/email.png" class="icon" alt="email icon" />
            <p>info@freezedryharvestkenya.com</p>
          </div>
          <div class="row">
            <img src="./Icons/Pin.png" class="icon" alt="location" />
            <p>Naivasha, Kenya</p>
          </div>
        </div>

        <div class="column logo">
          <img src="./footer.png" alt="Footer logo" />
        </div>
      </div>

      <div class="rights">
        <p>
          Copyright 2024 Freezedry Harvest Kenya EPZ Limited. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
