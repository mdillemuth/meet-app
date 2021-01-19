import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

// Unit Tests
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

  // test('should render all events by default', () => {
  //   const numTotalEvents = mockData.length;
  //   expect(AppWrapper.state().events.length).toEqual(numTotalEvents);
  // });

  // // updateEvents(location, number) function
  // test('passing location to updateEvents() should update App component location state', () => {
  //   const instance = AppWrapper.instance();
  //   instance.updateEvents('London');
  //   expect(AppWrapper.state().currentLocation).toEqual('London');
  // });

  // test('passing location to updateEvents() should filter events in App component state', () => {
  //   const instance = AppWrapper.instance();
  //   // Filter events based on location passed to updateEvents() function
  //   const filteredEvents = mockData.filter(
  //     (event) => event.location === 'London'
  //   );

  //   instance.updateEvents('London');
  //   expect(AppWrapper.state().events).toEqual(filteredEvents);
  // });

  // test('passing "all" to updateEvents() should unfilter events in App component state', () => {
  //   const events = mockData;
  //   const instance = AppWrapper.instance();

  //   // We filter events with location 'London'
  //   const filteredEvents = mockData.filter(
  //     (event) => event.location === 'London'
  //   );
  //   instance.updateEvents('London');
  //   expect(AppWrapper.state().events).toEqual(filteredEvents);

  //   // Now we pass 'all' as a location, and expect original (unfiltered) events
  //   instance.updateEvents('all');
  //   expect(AppWrapper.state().events).toEqual(events);
  // });

  // test('passing null as location to updateEvents should not modify previous location state', () => {
  //   const initialState = 'all';
  //   const instance = AppWrapper.instance();
  //   instance.updateEvents(null, '32');
  //   expect(AppWrapper.state().location).toEqual(initialState);
  // });

  // // numEvents (number of events)
  // test('passing numEvents to updateEvents() should update number of events in events state', () => {
  //   const expectedNumEvents = 1;
  //   const instance = AppWrapper.instance();

  //   // Pass 5 as numEvents to updateEvents()
  //   instance.updateEvents(null, '1');
  //   expect(AppWrapper.state().events.length).toEqual(expectedNumEvents);
  // });

  // test('passing null location should continue to filter based on current state location', () => {
  //   // Use case:
  //   // User sets 'London' to location
  //   // User changes numEvents to '25'
  //   // Expected: 'London' filter persists

  //   const instance = AppWrapper.instance();
  //   instance.updateEvents('London');
  //   instance.updateEvents(null, '25');
  //   expect(AppWrapper.state().location).toEqual('London');
  // });
});

// Integration Tests
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.events.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents.events);
    AppWrapper.unmount();
  });
});

// Interaction between App, NumberOfEvents, and EventList components
// Data from Mock API
