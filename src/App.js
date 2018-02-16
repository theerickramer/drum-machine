import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="drum-machine">
        <div className="name">
          <h1>808</h1>
        </div>
        <div className="controls">
          <button className="button--stop" />
          <button className="button--play" />
          <div className="bpm">
            <input className="bpm__input" value="128" id="bpm" />
            <label className="bpm__label" htmlFor="bpm">
              BPM
            </label>
          </div>
          <select className="sequence">
            <option>Sequence 1</option>
            <option>Sequence 2</option>
            <option>Sequence 3</option>
          </select>
        </div>
        <div className="step-column-headers"></div>
        <div className="instruments"></div>
        <div className="steps"></div>
      </div>
    );
  }
}

export default App;
