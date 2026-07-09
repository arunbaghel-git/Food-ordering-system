import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getCartTotal } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((elem, index) => {
        if (cartItems[elem._id] > 0) {
          return (
            <div className="cart-items-title cart-items-item">
              <img src={elem.image} alt="" />
              <p>{elem.name}</p>
              <p>${elem.price}</p>
              <p>{cartItems[elem._id]}</p>
              <p>${elem.price * cartItems[elem._id]}</p>
              <p onClick={() => removeFromCart(elem._id)} className="cross">
                x
              </p>
            </div>
          );
        }
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getCartTotal() === 0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details">
              <b>total</b>
              <b>${getCartTotal() === 0 ? 0 : getCartTotal() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code ,Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" name="" id="" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
