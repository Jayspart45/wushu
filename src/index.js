import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './templates/Navbar';

import '../src/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
  </React.StrictMode>
);


reportWebVitals();
