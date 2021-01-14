import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, numEvents;

  beforeAll(() => {
    const updateEvents = jest.fn(location, numEvents);
    numEvents = '32';
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents numEvents={numEvents} updateEvents={updateEvents} />
    );
  });

  test('should specify 32 as value for events by default', () => {
    expect(NumberOfEventsWrapper.instance().props.numEvents).toBe('32');
  });

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('number input should render numEvents as its value correctly', () => {
    const numEvents = NumberOfEventsWrapper.instance().props.numEvents;
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numEvents);
  });

  test('should correctly pass input value to updateEvents as second argument (numEvents)', () => {
    const instance = NumberOfEventsWrapper.instance();
    const eventObject = { target: { value: '25' } };

    instance.handleChange(eventObject);

    expect(instance.props.updateEvents.mock.calls[0][1]).toBe('25');
  });
});
