import React from 'react';
import Header from "../../components/Header/Header"
import banner from "../../images/banner.png"
import "./Home.scss";
function Home() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="home-container">
        
          <img className="banner" src={banner}/>
        
        </div>
      </div>
    </div>
  )
}

export default Home;

