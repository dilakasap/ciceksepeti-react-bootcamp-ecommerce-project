import React, { useState, useEffect } from "react";
import logo from "../../images/ikinciel.svg";
import image from "../../images/signUp.png";
import { Link } from "react-router-dom";
import "../SignUp/SignUp.scss";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/actions/login";
import { useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import errorLogo from "../../images/error-logo.svg";

function Login() {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(() => {
    if (login.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("AccessToken", login.data.access_token);
      window.location.href = "/";
    } else if (login.status === REQUEST_STATUS.ERROR) {
      toast("Emailiniz veya şifreniz hatalı.", {
        hideProgressBar: true,
        autoClose: 3000,
        icon: ({ theme, type }) => <img alt="error" src={errorLogo} />,
      });
    }
  }, [login]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (errors.email || errors.password) {
      return;
    }
    dispatch(postLogin(email, password));
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    if (errors.email || errors.password) {
      setHasError(true);
    }
  }, [errors]);
  return (
    <>
      {/* login page and validations */}
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
                type="text"
                id={errors.email && "login-email-error"}
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <p className="forget-password">Şifremi Unuttum</p>
              <button className="button" id="login-button">
                Giriş Yap
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
