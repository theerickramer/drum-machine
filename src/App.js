import React, { Component } from 'react';
import StepHeaders from './StepHeaders';
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
    const {bpm, current, instruments, steps} = this.state;
    return <div className="drum-machine">
        <div className="name">
          <h1>808</h1>
        </div>
        <div className="controls">
          <button className="button button--stop">
            <div className="icon icon--stop" />
          </button>
          <button className="button button--play">
            <div className="icon icon--play" />
          </button>
          <div className="bpm">
            <input className="bpm__input" value={bpm} id="bpm" />
            <label className="bpm__label" htmlFor="bpm">
              BPM
            </label>
          </div>
          <select className="sequence" id="sequence">
            <option>SEQUENCE 1</option>
            <option>SEQUENCE 2</option>
            <option>SEQUENCE 3</option>
          </select>
          <label className="sequence-label" htmlFor="sequence">
            <div className="icon icon--disclosure" />
          </label>
        </div>
        <div className="space" />
        <StepHeaders steps={steps} />
        <Instruments instruments={instruments} />
        <Steps current={current} instruments={instruments} />
      </div>;
  }
}

export default App;
