import React, { useState } from "react";
import Header from "../../header/Header.jsx";
import ExploreMenu from "../../exploremenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  );
};

export default Home;
