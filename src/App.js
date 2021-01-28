import React from 'react';

import logo from './logo.svg';
import env from './environments';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{env.api}</p>
      </header>
    </div>
  );
}

export default App;
