import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="column">
          <div class="h1">QUICK LINKS</div>
          <div class="links">
            <a>Home</a>
            <a>About Us</a>
            <a>Products</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </div>
        </div>

        <div class="column">
          <div class="h1">GET IN TOUCH</div>
          <div>
            <img src="" class="icon" alt="phone number icon" />
            <div class="p">+91 123 456 7890</div>
          </div>
          <div>
            <img src="" class="icon" alt="email icon" />
            <div class="p">info@freezedryharvestkenya.com</div>
          </div>
          <div>
            <img src="" class="icon" alt="location" />
            <div class="p">Naivasha, Kenya</div>
          </div>
        </div>

        <div class="column">
          <img src="" class="footer-logo-image" alt="Footer logo" />
        </div>
      </div>

      <div>
        <div>Copyright</div>
        <div>Social media</div>
      </div>
    </div>
  );
};

export default Footer;
