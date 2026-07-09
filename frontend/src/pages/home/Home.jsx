import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../header/Header.jsx";
import ExploreMenu from "../../exploremenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay.jsx";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </>
  );
};

export default Home;
