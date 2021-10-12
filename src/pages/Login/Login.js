import React from 'react'
import logo from "../../images/ikinciel.svg";
import image from "../../images/signUp.png";
import { Link } from 'react-router-dom';
import "../SignUp/SignUp.scss";
import "./Login.scss";

function Login() {
  return (
    <>
    <div className="main-container">
      <img src={image} />
      <div className="right-side">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="sign-up">
          <p className="title">Giriş Yap</p>
          <p className="note">Fırsatlardan yararlanmak için giriş yap!</p>
          <form>
            <label>Email</label>
            <input className="input"
              placeholder="Email@example.com"
              type="email"
              required
            ></input>
            <label>Şifre</label>
            <input className="input" type="password" placeholder="Password" required></input>
            <p className="forget-password">Şifremi Unuttum</p>
            <button className="button login-button">Üye Ol</button>
          </form>
          <div className="toLogin">
          <p>
            Hesabın var mı? 
            <Link className="link" to="/signup"> Üye Ol</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
