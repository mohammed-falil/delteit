import React from "react";
import "./foodcard.scss";

function FoodCard(props) {
  return (
    <div className="food-card_main">
      <div className="card-img"></div>
      <div className="card-content">
        <h4>Food Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
    </div>
  );
}

export default FoodCard;
