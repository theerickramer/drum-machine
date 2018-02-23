import React, { Component, Fragment } from 'react';
import './StepHeaders.css';

export default class Header extends Component {
  steps() {
    let steps = [];
    for (let i = 1; i <= this.props.steps; i++) {
      steps.push(<li className="step-header" key={i}>{i}</li>);
    }
    return steps;
  }
  render() {
    return (
      <Fragment>
        <ul className="step-headers">{this.steps()}</ul>
      </Fragment>
    );
  }
}
