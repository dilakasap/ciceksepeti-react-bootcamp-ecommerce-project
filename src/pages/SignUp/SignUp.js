import React from "react";
import "./SignUp.scss";
import image from "../../images/signUp.png";
import logo from "../../images/ikinciel.svg";
import { Link} from "react-router-dom";


function SignUp() {
  return (
    <>
    <div className="main-container">
      <img src={image} />
      <div className="right-side">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="sign-up">
          <p className="title">Üye Ol</p>
          <p className="note">Fırsatlardan yararlanmak için üye ol!</p>
          <form>
            <label>Email</label>
            <input className="input"
              placeholder="Email@example.com"
              type="email"
              required
            ></input>
            <label>Şifre</label>
            <input className="input" type="password" placeholder="Password" required></input>
            <button className="button signup-button">Üye Ol</button>
          </form>
          <div className="toLogin">
          <p>
            Hesabın var mı? 
            <Link className="link" to="/login"> Giriş Yap</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
