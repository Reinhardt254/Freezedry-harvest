"use client";

import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img src="./Color.png" alt="Navbar logo" />
        </a>
      </div>

      <div class="links">
        <div class="container">
          <img src="./focus.png" alt="focus icon" />
          <a href="/" class="">
            Home
          </a>
        </div>
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
          <div onClick={() => setToggle(false)} class="close">
            <img
              src="https://plantechkenya.com/wp-content/uploads/2024/05/cross.png"
              alt="menu icon"
              class="nav-icon"
            />
          </div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        <img
          src="https://plantechkenya.com/wp-content/uploads/2024/05/menu.png"
          alt="close-icon"
          class="nav-icon"
        />
      </div>
    </div>
  );
}

export function HomeNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img src="./Color.png" alt="Navbar logo" />
        </a>
      </div>

      <div class="links">
        <div class="container">
          <img src="./focus.png" alt="focus icon" />
          <a href="/" class="">
            Home
          </a>
        </div>
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
          <div onClick={() => setToggle(false)} class="close">
            <img
              src="https://plantechkenya.com/wp-content/uploads/2024/05/cross.png"
              alt="menu icon"
              class="nav-icon"
            />
          </div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        <img
          src="https://plantechkenya.com/wp-content/uploads/2024/05/menu.png"
          alt="close-icon"
          class="nav-icon"
        />
      </div>
    </div>
  );
}

export function AboutNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img src="./Color.png" alt="Navbar logo" />
        </a>
      </div>

      <div class="links">
        <a href="/">Home</a>
        <div class="container">
          <img src="./focus.png" alt="focus icon" />
          <a href="/about" class="">
            About Us
          </a>
        </div>
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
          <div onClick={() => setToggle(false)} class="close">
            <img
              src="https://plantechkenya.com/wp-content/uploads/2024/05/cross.png"
              alt="menu icon"
              class="nav-icon"
            />
          </div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        <img
          src="https://plantechkenya.com/wp-content/uploads/2024/05/menu.png"
          alt="close-icon"
          class="nav-icon"
        />
      </div>
    </div>
  );
}

export function ProductsNav() {
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
          <div class="container dropbtn">
            <img src="./focus.png" alt="focus icon" />
            <a href="/" class="">
              Products
            </a>
          </div>
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
          <div onClick={() => setToggle(false)} class="close">
            <img
              src="https://plantechkenya.com/wp-content/uploads/2024/05/cross.png"
              alt="menu icon"
              class="nav-icon"
            />
          </div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        <img
          src="https://plantechkenya.com/wp-content/uploads/2024/05/menu.png"
          alt="close-icon"
          class="nav-icon"
        />
      </div>
    </div>
  );
}

export function ContactsNav() {
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
          <div onClick={() => setToggle(false)} class="close">
            <img
              src="https://plantechkenya.com/wp-content/uploads/2024/05/cross.png"
              alt="menu icon"
              class="nav-icon"
            />
          </div>
        </div>
      )}

      <div class="contact">
        <a href="/contact" class="button-solid">
          Contact Us
        </a>
      </div>

      <div onClick={() => setToggle(true)} class="menu">
        <img
          src="https://plantechkenya.com/wp-content/uploads/2024/05/menu.png"
          alt="close-icon"
          class="nav-icon"
        />
      </div>
    </div>
  );
}
