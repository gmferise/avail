import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render((
  <React.StrictMode>
    <BrowserRouter basename="/avail">
      <App />
    </BrowserRouter>
  </React.StrictMode>
), document.getElementById('root'));