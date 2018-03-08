import React, { Component } from 'react';

class Step extends Component {
  play() {
    if (this.refs.sound) {
      this.refs.sound.play();
    }
  }

  render() {
    const { current, step, instrument } = this.props;
    if (instrument.steps[current - 1]) this.play();
    
    if (step === 1) {
      // this.play();
      return (
        <div className="step__marker">
          <audio ref="sound" src={instrument.sound} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Step;
