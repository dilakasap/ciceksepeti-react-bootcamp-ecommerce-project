import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "../pages/Account/Account";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignUp from "../pages/SignUp/SignUp";

function Routes() {
  return (
    <div>
      <Router>
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
            <ProductDetails/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
