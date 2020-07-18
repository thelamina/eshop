import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import Profile from "../Auth/Profile/Profile";

const Auth = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/resetPassword' component={ResetPassword} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Fragment>
  );
};

export default Auth;
