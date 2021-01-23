import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import DataVisualization from './DataVisualization';
import { WarningAlert, ErrorAlert } from './Alert';
import { getEvents } from './api';
import './styles/App.scss';
import './styles/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '10',
    warningText: '',
    errorText: '',
  };
  // Note: numberOfEvents uses a string to prevent type conversion
  async componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        errorText:
          'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
      });
    } else {
      this.setState({ errorText: '' });
    }
    if (this.mounted) {
      this.updateEvents();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

    this.setState({ warningText: 'Please wait, events are loading...' });

    // If user selects a location from input
    if (location) {
      getEvents().then((response) => {
        // Applies new filter for location
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
          warningText: '',
        });
      });
    } else {
      getEvents().then((response) => {
        // Persists location filter from state
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const numEvents = eventCount || numberOfEvents;
        const events = locationEvents.slice(0, numEvents);
        if (this.mounted) {
          return this.setState({
            events: events,
            numberOfEvents: eventCount,
            locations: response.locations,
            warningText: '',
          });
        }
      });
    }
  };

  // Gets total number of events happening in each city
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(' ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const {
      numberOfEvents,
      events,
      locations,
      warningText,
      errorText,
    } = this.state;

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <ErrorAlert text={errorText} />
        <WarningAlert text={warningText} />
        <DataVisualization data={this.getData()} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
