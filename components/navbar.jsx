import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-logo-container">
        <a href="/">
          <img 
             src="" 
             class="navbar-logo-image" 
             alt="Navbar logo" 
          />
        </a>
      </div>

      <div class="navbar-links-container">
        <a href="/" class="">
          Home
        </a>
        <a href="/about">About Us</a>
        <a href="/product">Products</a>
      </div>

      <div class="contact-button-container">
        <button>
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
