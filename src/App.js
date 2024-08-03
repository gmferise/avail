import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRedirectQuery } from './util/hooks';

import './App.css';

import HomePage from './view/HomePage';

function App() {
  useRedirectQuery();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;