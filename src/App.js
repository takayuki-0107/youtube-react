import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Top, Search, Watch } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
  );
}

export default App;
