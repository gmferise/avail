import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRedirectQuery } from './util/hooks';

import './App.css';

import HomePage from './view/HomePage';

function App() {
  useRedirectQuery();
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;