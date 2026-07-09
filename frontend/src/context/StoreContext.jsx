import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";
// Creating global context to share food data and cart functionality
// across all React components without prop drilling.
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  // Stores cart items as an object:{ itemId: quantity }
  const [cartItems, setCartItems] = useState({});
  //   add to cart,If item already exists, increases its quantity,otherwise creates a new cart entry with quantity 1.
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  //  Removes one quantity of selected item from cart.
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  // Values and functions exposed globally through Context API.
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
