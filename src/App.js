import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="drum-machine">
        <Header />
        <div className="instruments"></div>
        <div className="steps"></div>
      </div>
    );
  }
}

export default App;
