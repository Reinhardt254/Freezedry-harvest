import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="column">
          <h1>QUICK LINKS</h1>
          <div class="links">
            <a>Home</a>
            <a>About Us</a>
            <a>Products</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </div>
        </div>

        <div class="column">
          <h1>GET IN TOUCH</h1>
          <div class="row">
            {/* <img src="" class="icon" alt="phone number icon" /> */}
            <p>+91 123 456 7890</p>
          </div>
          <div class="row">
            {/* <img src="" class="icon" alt="email icon" /> */}
            <p>info@freezedryharvestkenya.com</p>
          </div>
          <div class="row">
            {/* <img src="" class="icon" alt="location" /> */}
            <p>Naivasha, Kenya</p>
          </div>
        </div>

        <div class="column logo">
          <img src="./footer.png" alt="Footer logo" />
        </div>
      </div>

      <div class="rights">
        <p>
          Copyright 2023 Freezedry Harvest Kenya EPZ Limited. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
