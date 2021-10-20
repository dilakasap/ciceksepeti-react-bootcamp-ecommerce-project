import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../redux/actions/email";
import account from "../../images/account.svg";
import "./Email.scss";
function Email() {
  const [email,setEmail]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div className="e-mail-wrapper">
      <div className="account-logo">
        <img src={account}></img>
      </div>
      <div className="e-mail"> {email}</div>
    </div>
  );
}

export default Email;
