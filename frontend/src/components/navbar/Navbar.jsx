import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartTotal } = useContext(StoreContext);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" />{" "}
        </Link>
        <ul>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#exploremenu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <Link to="/cart" className="navbar-cart-icon">
            <img src={assets.basket_icon} alt="" />
            {getCartTotal() > 0 && <div className="dot"></div>}
          </Link>
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
