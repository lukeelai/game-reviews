import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import PCPage from "../components/PCPage";
import ConsolePage from "../components/ConsolePage";
import VRPage from "../components/VRPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PCPage} exact={true} />
        <Route path="/console" component={ConsolePage} />
        <Route path="/vr" component={VRPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
