import React, { Component, Fragment } from 'react';
import StepHeaders from './StepHeaders';
import './Header.css';

export default class Header extends Component {
  render() {
    const { bpm, steps } = this.props;
    return (
      <Fragment>
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
        <StepHeaders steps={steps}/>
      </Fragment>
    );
  }
}
