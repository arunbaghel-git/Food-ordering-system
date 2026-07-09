import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // Getting cart state and cart update functions from Context API, to manage add/remove quantity directly from each food card.
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img src={image} alt="" />
          {
            /*If item is not in cart:
            show add btn.
            If item already exists:
            show quantity controller with
            +/- options.
          */
            !cartItems[id] ? (
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
                alt=""
              />
            ) : (
              <div className="food-item-counter">
                <img
                  onClick={() => removeFromCart(id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
                <p>{cartItems[id]}</p>
                <img
                  onClick={() => addToCart(id)}
                  src={assets.add_icon_green}
                  alt=""
                />
              </div>
            )
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
        </div>
        <div className="food-item-description">{description}</div>
        <p className="food-item-price">{price}</p>
      </div>
    </>
  );
};

export default FoodItem;
