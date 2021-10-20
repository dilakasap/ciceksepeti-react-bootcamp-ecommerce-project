import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "../pages/Account/Account";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignUp from "../pages/SignUp/SignUp";
import UploadProduct from "../pages/UploadProduct/UploadProduct";

function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("AccessToken")){
      setIsLoggedIn(true);
    }
  },[localStorage]);
  console.log(isLoggedIn);
  return (
    <div>
      <Router>
        {isLoggedIn ? (
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/upload-product">
                <UploadProduct />
              </Route>
              <Route exact path="/products/:id">
                <ProductDetails />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/products/:id">
                <ProductDetails />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default Routes;
