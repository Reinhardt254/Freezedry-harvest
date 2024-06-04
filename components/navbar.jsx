import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img  
             src="./color.png" 
             alt="Navbar logo" 
          />
        </a>
      </div>

      <div class="links">
        <a href="/" class="">
          Home
        </a>
        <a href="/about">About Us</a>
        <a href="/product">Products</a>
      </div>

      <div class="contact">
          <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};
export default Navbar;
