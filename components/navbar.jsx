import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img src="./Color.png" alt="Navbar logo" />
        </a>
      </div>

      <div class="links">
        <a href="/" class="">
          Home
        </a>
        <a href="/about">About Us</a>
        <div class="dropdown">
          <a class="dropbtn">Products</a>
          <div class="content">
            <a href="/fruits">Fruits</a>
            <a href="/herbs">Herbs</a>
            <a href="/leafygreens">Leafygreens</a>
          </div>
        </div>
      </div>

      <div class="contact">
        <a href="/contact" class="button-solid">Contact Us</a>
      </div>
    </div>
  );
};
export default Navbar;
