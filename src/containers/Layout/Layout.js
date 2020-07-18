import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import Profile from "../Auth/Profile/Profile";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/login' component={Login} />
          <Route path='/resetPassword' component={ResetPassword} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default Layout;
