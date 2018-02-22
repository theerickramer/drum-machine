import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    bpm: 128,
    instruments: [
      { name: 'kick', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
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
        <ul className="instruments">
          {this.state.instruments.map((instrument, index) => (
            <li className="instrument" key={index}>
              <h4 className="instrument__name">{instrument.name}</h4>
            </li>
          ))}
        </ul>
        <div className="steps" />
      </div>
    );
  }
}

export default App;
