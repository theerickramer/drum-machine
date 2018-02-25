import React, { Component } from 'react';
import './Instruments.css';

class Instruments extends Component {
  render() {
    return (
      <ul className="instruments">
        {this.props.instruments.map((instrument, index) => (
          <li className="instrument" key={index}>
            <h4 className="instrument__name">{instrument.name}</h4>
          </li>
        ))}
      </ul>
    );
  }
}

export default Instruments;
