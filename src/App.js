import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { extractLocations, getEvents, checkToken, getToken } from './api';
import './styles/App.scss';
import './styles/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '24',
  };
  // numberOfEvents uses a string to prevent type conversion

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const validToken =
      accessToken !== null ? await checkToken(accessToken) : false;

    if (validToken) this.updateEvents();

    this.mounted = true;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    // this.updateEvents();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

    // If user selects a location from input
    if (location) {
      getEvents().then((response) => {
        // Applies new filter for location
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        const locations = response.locations;
        return this.setState({
          events,
          locations,
          currentLocation: location,
        });
      });
    }
    // If user does not select a location, but chooses number of events
    else {
      getEvents().then((response) => {
        // Persists location filter from state
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        const locations = response.locations;
        return this.setState({
          events,
          locations,
          numberOfEvents: eventCount,
        });
      });
    }
  };

  render() {
    const { numberOfEvents, events, locations } = this.state;

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
