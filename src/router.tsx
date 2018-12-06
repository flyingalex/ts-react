import * as React from 'react';
import { Route, Router, Switch } from 'dva/router';
import Count from './components/Count';
import World from './components/World';

export default ({ history }: { history: any }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/count" component={Count} />
        <Route path="/" component={World} />
      </Switch>
    </Router>
  );
};
