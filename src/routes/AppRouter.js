import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Signup/Signup';
import SignIn from '../Pages/Signin/Signin';
import NotFound from '../Pages/NotFound/NotFound';

const AppRouter = () => (
  <div className="layout">
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
  </div>
);

export default AppRouter;
