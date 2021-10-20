import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import image from "../../images/signUp.png";
import logo from "../../images/ikinciel.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postSignup } from "../../redux/actions/signup";
import { useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { useHistory } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = useSelector((state) => state.signup);
  const history = useHistory();

  useEffect(() => {
    if (signup.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("AccessToken", signup.data.access_token);
      history.push("/");
    } else if (signup.status === REQUEST_STATUS.ERROR) {
      alert(signup.error.message);
    }
  }, [signup]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = () => {
    if (errors.email || errors.password) {
      return;
    }
    dispatch(postSignup(email, password));
  };
  useEffect(() => {
    if (errors.email || errors.password) {
      setHasError(true);
    }
  }, [errors]);

  return (
    <>
      <div className="main-container">
        <img alt="signupimage" id="signup-image" src={image} />
        <div className="right-side">
          <div className="logo">
            <img alt="signuplogo" src={logo} id="signup-logo" />
          </div>
          <div className="sign-up">
            <p className="title">Üye Ol</p>
            <p className="note">Fırsatlardan yararlanmak için üye ol!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <input
                className="input"
                placeholder="Email@example.com"
                type="text"
                id={errors.email && "signup-email-error"}
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
                id={errors.password && "signup-password-error"}
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              {/* <Modal isOpen={hasError}>
                 {errors.email && errors.email.type === "required" && (
                  <div>email yok!</div>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <div>Hatalı bir email gridiniz.</div>
                )}
                {errors.password && errors.password.type === "required" && (
                  <div>Lütfen şifrenizi griiniz.</div>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <div>Şifreniz 8 ile 20 arasında olmalıdır.</div>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <div>Şifreniz 8 ile 20 arasında olmalıdır.</div>
                )} 
              </Modal>  */}
              <button className="button" id="signup-button">
                Üye Ol
              </button>
            </form>
            <div className="toLogin">
              <p>
                Hesabın var mı?
                <Link className="link" to="/login">
                  {" "}
                  Giriş Yap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
