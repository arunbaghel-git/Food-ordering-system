import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    
    <>
    { showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
         
      </div>
     <Footer />
    </>
  );
};

export default App;
