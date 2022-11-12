import { React, useState } from "react";
import logo_mobile from "../../../assets/logo/logo_mobile.jpeg";
import "./mobileMenu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function HamburgerMenu() {
  const selectNavStyles = ({ isActive }) => {
    return {
      fontWeight: "bold",
      textDecoration: "none",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "red" : "white",
    };
  };

  return (
    <div className="menu-mobile">
      <div className="logo_name">
        <img src={logo_mobile} alt="logo" />
        <h3>FREEZE N FRY</h3>
      </div>

      <div className="nav_links">
        <NavLink className="link" style={selectNavStyles} to="/home">
          <div className="home-link" id="home-link">
            <AiOutlineHome className="icon" />
            <p>HOME</p>
          </div>
        </NavLink>
        <NavLink className="link" to="/products" style={selectNavStyles}>
          <div className="products-link" id="products-link">
            <BiStore className="icon" />
            <p>PRODUCTS</p>
          </div>
        </NavLink>

        <NavLink className="link" to="/about-us" style={selectNavStyles}>
          <div className="aboutUs-link" id="aboutUs-link">
            <AiOutlineInfoCircle className="icon" />
            <p>ABOUT US</p>
          </div>
        </NavLink>

        <NavLink className="link" to="contact-us" style={selectNavStyles}>
          <div className="contactUs-link" id="contactUs-link">
            <AiOutlineMail className="icon" />
            <p> CONTACT US</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
