import React, { Component } from 'react';
import Step from './Step.js';
import './Steps.css';

class Steps extends Component {
  renderSteps(instrument) {
    const { current } = this.props;
    return instrument.steps.map((step, index) => {
      return <li className="step-container" key={index}>
          <div className={current - 1 === index ? 'step active' : 'step'}>
            <Step current={current} step={step} instrument={instrument} />
          </div>
        </li>;
    });
  }

  renderStepRows() {
    const { instruments } = this.props;
    const stepRows = instruments.map((instrument, index) => {
      return (
        <li className="steps__row-container" key={index}>
          <ul className="steps__row">{this.renderSteps(instrument)}</ul>
        </li>
      );
    });
    return stepRows;
  }

  render() {
    return <ul className="steps">{this.renderStepRows()}</ul>;
  }
}

export default Steps;
