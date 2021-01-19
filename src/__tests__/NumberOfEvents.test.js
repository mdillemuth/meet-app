import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, eventCount;

  beforeAll(() => {
    const updateEvents = jest.fn(eventCount);
    const numberOfEvents = '24';
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        updateEvents={updateEvents}
      />
    );
  });

  test('should specify 24 as value for events by default', () => {
    expect(NumberOfEventsWrapper.instance().props.numberOfEvents).toBe('24');
  });

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('number input should render numEvents as its value correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.instance().props
      .numberOfEvents;
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toEqual(
      numberOfEvents
    );
  });

  test('should change state when input changes', () => {
    const eventObject = { target: { value: '10' } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
  });
});
