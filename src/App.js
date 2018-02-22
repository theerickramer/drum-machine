import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    steps: 16,
    instruments: [
      { name: 'kick', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { name: 'snare', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { name: 'open hat', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { name: 'closed hat', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ]
  };
  render() {
    return (
      <div className="drum-machine">
        <Header steps={this.state.steps} />
        <ul className="instruments">
          {this.state.instruments.map(instrument => <li className="instrument"><h4 className="instrument__name">{instrument.name}</h4></li>)}
        </ul>
        <div className="steps" />
      </div>
    );
  }
}

export default App;
