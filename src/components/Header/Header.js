import React from 'react';
import { useHistory } from 'react-router';
import logo from "../../images/ikinciel.svg";
import user from "../../images/user.svg";
import "./Header.scss";
function Header() {
  const history=useHistory();
  const goHomePage=(()=>{
    history.push("/");
  })
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header-logo">
          <img alt="ikinciel-logo" src={logo} onClick={goHomePage}/>
        </div>
        <div className="user">
        <button className="button-secondary" id="header-login-button">
          <img src={user}/> Giriş Yap
        </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
