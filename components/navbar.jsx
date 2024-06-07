"use client";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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

      {toggle && (
        <div class="links-mobile">
          <a href="/" class="">
            Home
          </a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <div class="dropdown">
            <a class="dropbtn">Products</a>
            <div class="content">
              <a href="/fruits">Fruits</a>
              <a href="/herbs">Herbs</a>
              <a href="/leafygreens">Leafygreens</a>
            </div>
          </div>
          <div onClick={() => setToggle(false)} class="close">close</div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        Menu
      </div>
    </div>
  );
};
export default Navbar;
