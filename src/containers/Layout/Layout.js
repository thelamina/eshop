import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default Layout;
