import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import Account from './components/Account';
import Hook from './components/Hook';
import Checkout from './components/Checkout';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import { getCheckboxUtilityClass } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="account" element={<Account />} />
      <Route path="hook" element={<Hook />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
