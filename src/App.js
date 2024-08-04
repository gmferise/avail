import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRedirectQuery } from './util/hooks';

import './App.css';

import HomePage from './view/HomePage';

function App() {
  useRedirectQuery();
  useEffect(() => {
    document.title = 'Avail';
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;