import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../redux/actions/email";
import account from "../../images/account.svg";
import "./Email.scss";
function Email() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmail());
  }, [dispatch]);
  const email = useSelector((state) => state.email);
  console.log(email);
  return (
    <div className="e-mail-wrapper">
      <div className="account-logo">
        <img src={account}></img>
      </div>
      <div className="e-mail"> {email.data}</div>
    </div>
  );
}

export default Email;
