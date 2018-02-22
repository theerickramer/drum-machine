import React, { Component, Fragment } from 'react';
import './Header.css';

export default class Header extends Component {
  steps() {
    let steps = [];
    for (let i = 1; i <= this.props.steps; i++) {
      steps.push(<li>{i}</li>);
    }
    return steps;
  }
  render() {
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
            <input className="bpm__input" value="128" id="bpm" />
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
        <ul className="step-headers">{this.steps()}</ul>
      </Fragment>
    );
  }
}
