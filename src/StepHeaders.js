import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  steps() {
    let steps = [];
    for (let i = 1; i <= this.props.steps; i++) {
      steps.push(<li key={i}>{i}</li>);
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
