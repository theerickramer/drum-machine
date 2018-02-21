import React, { Component, Fragment } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
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
        <div className="space" />
        <div className="step-headers" />
      </Fragment>
    );
  }
}
