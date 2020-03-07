import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import HomePage from "views/Website/Homepage";
import LoginPage from "views/Website/LoginPage";
import "bootstrap/dist/css/bootstrap.css";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
