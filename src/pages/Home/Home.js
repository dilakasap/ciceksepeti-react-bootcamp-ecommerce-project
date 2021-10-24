import React, { useState } from "react";
import Header from "../../components/Header/Header";
import banner from "../../images/banner.png";
import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
function Home() {
  const [selectedCategory,setSelectedCategory]=useState("");
  return (
    <div>
      <Header />
      <div className="container">
        <div className="home-container">
          <img className="banner" src={banner} />
          <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Products selectedCategory={selectedCategory}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
