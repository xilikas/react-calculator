import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        React Calculator
      </p>
    </header>
    <Calculator />
  </div>
);

export default App;
