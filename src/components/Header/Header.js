import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import logo from "../../images/ikinciel.svg";
import user from "../../images/user.svg";
import plus from "../../images/plus.svg";
import "./Header.scss";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("AccessToken")) {
      setIsLoggedIn(true);
    }
  }, []);
  // page directions
  const history = useHistory();
  const goHomePage = () => {
    history.push("/");
  };
  const goLoginPage = () => {
    history.push("/login");
  };
  const goAccountPage = () => {
    console.log("HESAP");
    history.push("/account");
  };
  const goUploadProductPage = () => {
    console.log("CREATEEEE");
    history.push("/upload-product");
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header-logo">
           {/* click logo for go to homepage */}
          <img alt="ikinciel-logo" src={logo} onClick={goHomePage} />
        </div>
        <div className="user">
          {isLoggedIn ? (
            <>
              <button
                className="button-secondary"
                id="header-product-button"
                onClick={goUploadProductPage}
              >
                <img src={plus} alt="pluslogo" /> Ürün Ekle
              </button>
              <button
                className="button-secondary"
                id="header-account-button"
                onClick={goAccountPage}
              >
                <img alt="userlogo" src={user} /> Hesabım
              </button>
            </>
          ) : (
            <button
              onClick={goLoginPage}
              className="button-secondary"
              id="header-login-button"
            >
              <img alt="userlogo" src={user} /> Giriş Yap
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
