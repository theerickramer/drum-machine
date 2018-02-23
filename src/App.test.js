import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import StepHeaders from './StepHeaders';

configure({ adapter: new Adapter() });

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

describe(`<StepHeaders>`, () => {
  it(`renders <li> elements for the number of steps in App state`, () => {
    const app = mount(<App />);
    const steps = app.state('steps');
    expect(app.find('.step-headers').children().length).toEqual(steps);
  });
});
