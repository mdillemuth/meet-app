import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { extractLocations } from './api';
import { mockData } from './mock-data';
import './styles/App.scss';

class App extends Component {
  state = {
    events: mockData,
    location: 'all',
    numEvents: '32',
  };
  // Using a string for numEvents prevents type conversion

  // Filters events based on location and number
  updateEvents = (selectedLocation, selectedNum) => {
    const { location, numEvents } = this.state;
    let events = mockData;

    if (selectedLocation) {
      // Filters events by location from user input
      let filteredEvents =
        selectedLocation === 'all'
          ? events
          : events.filter((e) => e.location === selectedLocation);
      // Limits events to number specified
      filteredEvents = filteredEvents.slice(0, numEvents);
      return this.setState({
        events: filteredEvents,
        location: selectedLocation,
        numEvents,
      });
    } else {
      // Filters events by location from current app state
      let filteredEvents =
        location === 'all'
          ? events
          : events.filter((e) => e.location === location);
      filteredEvents = filteredEvents.slice(0, selectedNum);
      return this.setState({
        events: filteredEvents,
        numEvents: selectedNum,
      });
    }
  };

  render() {
    // Pulling data for the suggestion dropdown
    let locations = extractLocations(mockData);

    const { numEvents, events } = this.state;

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numEvents={numEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
