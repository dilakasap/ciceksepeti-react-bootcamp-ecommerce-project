import React, { useState, useEffect } from "react";
import logo from "../../images/ikinciel.svg";
import image from "../../images/signUp.png";
import { Link } from "react-router-dom";
import "../SignUp/SignUp.scss";
import "./Login.scss";
import { useForm } from "react-hook-form";

function Login() {
  const [hasError, setHasError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  useEffect(() => {
    if (errors.email || errors.password) {
      setHasError(true);
    }
  }, [errors]);
  return (
    <>
      <div className="main-container">
        <img alt="loginimage" id="login-image" src={image} />
        <div className="right-side">
          <div className="logo">
            <img alt="loginlogo" id="login-logo" src={logo} />
          </div>
          <div className="sign-up">
            <p className="title">Giriş Yap</p>
            <p className="note">Fırsatlardan yararlanmak için giriş yap!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <input
                className="input"
                placeholder="Email@example.com"
                type="email"
                id={errors.email && "login-email-error"}
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              ></input>
              <label>Şifre</label>
              <input
                className="input"
                type="password"
                placeholder="Password"
                id={errors.password && "login-password-error"}
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              ></input>
              <p className="forget-password">Şifremi Unuttum</p>
              <button className="button" id="login-button">
                Üye Ol
              </button>
            </form>
            <div className="toLogin">
              <p>
                Hesabın yok mu?
                <Link className="link" to="/signup">
                  {" "}
                  Üye Ol
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
