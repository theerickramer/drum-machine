import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StepHeaders from './StepHeaders';

describe(`<App>`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`converts bpm tempo to step interval in milliseconds`, () => {
    const bpm = 128;
    const expected = 60 / bpm * 4 / 16 * 1000;
    const actual = new App().calculateInterval(bpm);
    expect(actual).toEqual(expected);
  });
});
