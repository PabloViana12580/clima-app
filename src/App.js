import React, { Component } from 'react';
import ClimaApp from './components/ClimaApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <ClimaApp />
      </div>
    );
  }
}

export default App;