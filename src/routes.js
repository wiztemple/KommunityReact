import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Answer from './pages/Answer.jsx';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Signin} />
      <Route path="/questions/:id" component={Answer} />
      <Route exact path="/answer" component={Answer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
