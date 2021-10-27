import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Create from "../pages/Create";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  );
};

export default routes;