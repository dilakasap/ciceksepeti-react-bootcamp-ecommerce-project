import React from 'react';
import logo from "../../images/ikinciel.svg";
import user from "../../images/user.svg";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header-logo">
          <img src={logo}/>
        </div>
        <div className="user">
        <button className="button-secondary header-login-button">
          <img src={user}/> Giriş Yap
        </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
