import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((elem, index) => {
          return (
            <FoodItem
              key={index}
              id={elem.id}
              name={elem.name}
              description={elem.description}
              image={elem.image}
              price={elem.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodDisplay;
