import React, { useState } from "react";
import "./navbar.scss";
import logo_mobile from "../../assets/logo/logo_mobile.jpeg";
import logo_tablet from "../../assets/logo/logo_tablet.jpeg";
import logo_computer from "../../assets/logo/logo_computer.jpeg";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Menu() {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const selectNavStyles = ({ isActive }) => {
    return {
      fontWeight: "bold",
      textDecoration: "none",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "red" : "white",
    };
  };

  const onClickMenu = () => {
    setMenuIconClicked(!menuIconClicked);
  };

  return (
    <div className="menu_head">
      <div className="logo_name_menu-btn">
        <img src={logo_mobile} alt="logo" />
        <h3>FREEZE 'N' FRY</h3>
        {menuIconClicked === false ? (
          <AiOutlineMenu className="menu-btn" onClick={onClickMenu} />
        ) : (
          <ImCross className="menu-btn" onClick={onClickMenu} />
        )}
      </div>

      {menuIconClicked && (
        <div className={"nav_links " + menuIconClicked}>
          <NavLink
            className="link"
            style={selectNavStyles}
            to="/home"
            onClick={onClickMenu}
          >
            <div className="home-link" id="home-link">
              <AiOutlineHome className="icon" />
              <p>HOME</p>
            </div>
          </NavLink>
          <NavLink
            className="link"
            to="/products"
            style={selectNavStyles}
            onClick={onClickMenu}
          >
            <div className="products-link" id="products-link">
              <BiStore className="icon" />
              <p>PRODUCTS</p>
            </div>
          </NavLink>
          <NavLink
            className="link"
            to="/about-us"
            onClick={onClickMenu}
            style={selectNavStyles}
          >
            <div className="aboutUs-link" id="aboutUs-link">
              <AiOutlineInfoCircle className="icon" />
              <p>ABOUT US</p>
            </div>
          </NavLink>
          <NavLink
            className="link"
            to="contact-us"
            onClick={onClickMenu}
            style={selectNavStyles}
          >
            <div className="contactUs-link" id="contactUs-link">
              <AiOutlineMail className="icon" />
              <p> CONTACT US</p>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Menu;
