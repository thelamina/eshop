import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/UI/Navbar";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default Layout;
