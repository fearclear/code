import React from 'react';
import { Router, Route } from 'dva/router';
import Users from './routes/users/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default RouterConfig;
