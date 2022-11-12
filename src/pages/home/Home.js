import React from "react";
import "./home.scss";
import FoodCard from "../../components/food-card/FoodCard";
import Card from "react-bootstrap/Card";
import image from "../../assets/logo/logo_mobile.jpeg";
function Home() {
  return (
    <div className="home-main">
      <div className="home-heading">
        <div className="title">
          <p>Savor the flavor with FREEZE'N'FRY </p>
        </div>
      </div>
      <div className="home-content">
        <div className="home-h3">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
          <div className="btn-div">
            <button className="about-btn">Know More</button>
          </div>
        </div>
        <div className="loved-products">
          <h3>Most Loved Products</h3>
          <div className="food-card">
            <FoodCard />
          </div>
        </div>
        <div className="user-reviews"></div>
      </div>
    </div>
  );
}

export default Home;
