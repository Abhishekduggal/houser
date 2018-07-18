import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Wizard from "./Component/Wizard/Wizard";
import Wizard_Two from "./Component/Wizard/Wizard_Two";
import Wizard_Three from "./Component/Wizard/Wizard_Three";
import Not_Found from "./Component/Wizard/Not_Found";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/wizard/step1" component={Wizard} />
    <Route exact path="/wizard/step2" component={Wizard_Two} />
    <Route exact path="/wizard/step3" component={Wizard_Three} />
    <Route path="*" component={Not_Found} />
  </Switch>
);
