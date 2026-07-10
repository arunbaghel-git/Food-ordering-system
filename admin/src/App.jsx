import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <hr />
      <div className="app-component">
        <Sidebar />
        <div className="right-content">
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
