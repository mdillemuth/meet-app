import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, numEvents;
  beforeAll(() => {
    numEvents = 32;
    NumberOfEventsWrapper = shallow(<NumberOfEvents numEvents={numEvents} />);
  });

  test('should specify 32 as value for events by default', () => {
    expect(NumberOfEventsWrapper.instance().props.numEvents).toBe(32);
  });

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('number input should render numEvents as its value correctly', () => {
    const numEvents = NumberOfEventsWrapper.instance().props.numEvents;
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numEvents);
  });
});
