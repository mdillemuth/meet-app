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
    numEvents: 32,
  };

  updateEvents = (selectedLocation, selectedNum) => {
    const { location, numEvents } = this.state;
    let events = mockData;

    if (selectedLocation) {
      let filteredEvents =
        selectedLocation === 'all'
          ? events
          : events.filter((e) => e.location === selectedLocation);
      filteredEvents = filteredEvents.slice(0, numEvents);
      return this.setState({
        events: filteredEvents,
        location: selectedLocation,
        numEvents,
      });
    } else {
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
    let locations = extractLocations(mockData);
    locations.push('See all cities');

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
