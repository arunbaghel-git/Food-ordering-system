import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets.js";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState == "Login" ? (
            <></>
          ) : (
            <input type="text" name="" id="" placeholder="your name" required />
          )}

          <input type="email" name="" id="" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState == "Sign Up" ? "create account" : "Login"}</button>
        {currState === "Login" ? (
        <p>
          Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>click here</span>
        </p>
      ) : (
        <p>
          Already have account ? <span onClick={()=>setCurrState("Login")}>Login here</span>
        </p>
      )}
      </div>
      
    </div>
  );
};

export default LoginPopup;
