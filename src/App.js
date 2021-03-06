import React, { Component } from 'react';
import logo from './logo.svg';
import AssetList from './components/AssetList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            VRact
          </p>
        </header>
        <AssetList/>
      </div>
    );
  }
}

export default App;
