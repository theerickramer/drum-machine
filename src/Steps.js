import React, { Component } from 'react';
import './Steps.css';

class Steps extends Component {
  renderSteps(steps) {
    const { current } = this.props;
    return steps.map((step, index) => {
      return (
        <li className="step-container" key={index}>
          <div className={current - 1 === index ? 'step active' : 'step'}>
            {step === 1 ? <div className="step__marker" /> : null}
          </div>
        </li>
      );
    });
  }

  renderStepRows() {
    const { instruments } = this.props;
    const stepRows = instruments.map((instrument, index) => {
      return (
        <li className="steps__row-container" key={index}>
          <ul className="steps__row">{this.renderSteps(instrument.steps)}</ul>
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
