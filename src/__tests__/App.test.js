import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('should render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('should render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('should render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  // Initial state
  test('should render correct initial state values', () => {
    expect(AppWrapper.state()).toEqual({
      events: mockData,
      location: 'all',
      numEvents: '32',
    });
  });

  test('should render all events by default', () => {
    const numTotalEvents = mockData.length;
    expect(AppWrapper.state().events.length).toEqual(numTotalEvents);
  });

  // updateEvents(location, number) function
  test('passing location to updateEvents() should update App component location state', () => {
    const instance = AppWrapper.instance();
    instance.updateEvents('London');
    expect(AppWrapper.state().location).toEqual('London');
  });

  test('passing location to updateEvents() should filter events in App component state', () => {
    const instance = AppWrapper.instance();
    // Filter events based on location passed to updateEvents() function
    const filteredEvents = mockData.filter(
      (event) => event.location === 'London'
    );

    instance.updateEvents('London');
    expect(AppWrapper.state().events).toEqual(filteredEvents);
  });

  test('passing "all" to updateEvents() should unfilter events in App component state', () => {
    const events = mockData;
    const instance = AppWrapper.instance();

    // We filter events with location 'London'
    const filteredEvents = mockData.filter(
      (event) => event.location === 'London'
    );
    instance.updateEvents('London');
    expect(AppWrapper.state().events).toEqual(filteredEvents);

    // Now we pass 'all' as a location, and expect original (unfiltered) events
    instance.updateEvents('all');
    expect(AppWrapper.state().events).toEqual(events);
  });

  test('passing null as location to updateEvents should not modify previous location state ', () => {
    const initialState = 'all';
    const instance = AppWrapper.instance();
    instance.updateEvents(null, '32');
    expect(AppWrapper.state().location).toEqual(initialState);
  });

  // numEvents (number of events)
  test('passing numEvents to updateEvents() should update number of events in events state', () => {
    const expectedNumEvents = 5;
    const instance = AppWrapper.instance();

    // Pass 5 as numEvents to updateEvents()
    instance.updateEvents(null, '5');
    expect(AppWrapper.state().events.length).toEqual(expectedNumEvents);
  });
});
