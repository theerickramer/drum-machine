import React, { Component } from 'react';
import Header from './Header';
import Instruments from './Instruments';
import Steps from './Steps';
import './App.css';

class App extends Component {
  state = {
    bpm: 128,
    current: 1,
    instruments: [
      { name: 'kick', steps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        name: 'snare',
        steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'open hat',
        steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'closed hat',
        steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    steps: 16
  };
  calculateInterval(bpm) {
    return 60 / this.state.bpm * 4 / this.state.steps * 1000;
  }
  render() {
    return (
      <div className="drum-machine">
        <Header bpm={this.state.bpm} steps={this.state.steps} />
        <Instruments instruments={this.state.instruments} />
        <Steps
          current={this.state.current}
          instruments={this.state.instruments}
        />
      </div>
    );
  }
}

export default App;
