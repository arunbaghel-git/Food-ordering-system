import React, { useState } from "react";
import { assets } from "../../assets/assets";
import '../navbar/Navbar.css'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="" />
        <ul>
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile App
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </li>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-cart-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
