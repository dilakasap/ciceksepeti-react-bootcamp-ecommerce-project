import React, { useEffect, useState } from "react";
import account from "../../images/account.svg";
import "./Email.scss";
function Email() {
  // get the email infro for the account 
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <div className="e-mail-wrapper">
      <div className="email-left-side">
        <div className="account-logo">
          <img alt="account-logo" src={account}></img>
        </div>
        <div className="e-mail"> {email}</div>
      </div>
      <button id="logout-button" className="button-secondary" onClick={logOut}>
        Çıkış Yap
      </button>
    </div>
  );
}

export default Email;
