import PageOne from './components/PageOne'
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Hook from './components/Hook'
import Account from './components/Account';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <PageOne /> 
      <Hook/>
      {/* <Account />   */}
    </div>
  );
}

export default App;
