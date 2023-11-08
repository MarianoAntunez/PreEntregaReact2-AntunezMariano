import React from "react";
import "./NavBar.css";
import Logo from "./logo-1.png";
import CartWidget from "../CartNav/CartWidget";

export const Nav = () => {
  return (
    <div className="NavBar">
      <img className="logo" src={Logo} alt="img" />
      <div className="menuNav">
        <a href="Shop">SHOP</a>
        <span></span>
        <a href="#">ABOUT</a>
      </div>
      <CartWidget />
    </div>
  );
};

export default Nav;
