import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import ActivityPage from "../pages/ActivityPage/ActivityPage";
import AuthCallbackPage from "../pages/AuthCallbackPage/AuthCallbackPage";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/dashboard'} component={ActivityPage} />
        <Route path={'/auth/callback'} component={AuthCallbackPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
