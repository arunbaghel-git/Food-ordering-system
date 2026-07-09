import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  // Accessing food data from global Context store,instead of passing it through props.
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          /* 
          Loop through all food items and display only those
          matching the selected category.
          If category is "All", show every food item.
         */
          food_list.map((elem, index) => {
            if (category === "All" || category === elem.category) {
              return (
                <FoodItem
                  key={index}
                  id={elem._id}
                  name={elem.name}
                  description={elem.description}
                  image={elem.image}
                  price={elem.price}
                />
              );
            }
          })
        }
      </div>
    </>
  );
};

export default FoodDisplay;
