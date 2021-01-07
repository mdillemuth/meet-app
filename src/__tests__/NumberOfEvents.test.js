import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('should specify 32 as value for events by default', () => {
    expect(NumberOfEventsWrapper.state('numEvents')).toBe(32);
  });

  test('should render text input correctly', () => {
    const numEvents = NumberOfEventsWrapper.state('numEvents');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numEvents);
  });

  test('should change state when text input changes', () => {
    const eventObject = { target: { value: 25 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numEvents')).toBe(25);
  });
});