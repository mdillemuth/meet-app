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
    location: '',
    numEvents: 32,
  };

  // Filter events displayed by location and number
  handleUpdateEvents = (location, numEvents) => {
    let events = mockData; // Start with full list of events

    // Filter by location when user selects location suggestion
    if (location) {
      events = events.filter((event) => event.location === location);
    }

    // Resets events when user chooses 'See all cities'
    if (location === 'showAll') {
      events = mockData;
    }

    events = events.slice(0, numEvents); // Limit events to numEvents
    return this.setState({ numEvents, events });
  };

  render() {
    let locations = extractLocations(mockData);
    const { numEvents, events } = this.state;

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch
          locations={locations}
          handleUpdateEvents={this.handleUpdateEvents}
        />
        <NumberOfEvents
          numEvents={numEvents}
          handleUpdateEvents={this.handleUpdateEvents}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
