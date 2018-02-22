import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    steps: 16,
    instruments: [
      { name: 'kick', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ]
  };
  render() {
    return (
      <div className="drum-machine">
        <Header steps={this.state.steps} />
        <ul className="instruments">
          {this.state.instruments.map(instrument => <li>{instrument.name}</li>)}
        </ul>
        <div className="steps" />
      </div>
    );
  }
}

export default App;
