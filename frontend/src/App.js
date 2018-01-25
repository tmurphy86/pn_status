import React, { Component } from 'react';
import logo from './logo-h-pn.svg';
import './App.css';

// ---------------------------------
// Custom Imports
import { Status, PanelsInstance } from './component/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prosperity Now's Technology Status</h1>
        </header>
        <Status></Status>
        <PanelsInstance></PanelsInstance>
      </div>

    );
  }
}

export default App;
