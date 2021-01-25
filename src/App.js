import React, { Component } from 'react';
import Home from './Home';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import DataVisualization from './DataVisualization';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import { WarningAlert } from './Alert';
import { checkToken, getEvents } from './api';
import './styles/App.scss';
import './styles/nprogress.css';

class App extends Component {
  state = {
    tokenCheck: false,
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '10',
    warningText: '',
    isLoading: false,
  };

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const validToken =
      accessToken !== null ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText:
          'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
      });
    } else {
      this.setState({ warningText: '' });
    }

    if (code && this.mounted && !validToken) {
      this.setState({ tokenCheck: true });
      this.updateEvents();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    // Starts loading gif on data call
    this.setState({ isLoading: true });

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
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
          isLoading: false,
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
            isLoading: false,
          });
        }
      });
    }
  };

  // Renders loading spinner while live data is being rendered
  renderData = () => {
    const { events, locations, isLoading } = this.state;

    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <div>
        <DataVisualization events={events} locations={locations} />
        <EventList events={events} />
      </div>
    );
  };

  render() {
    const { numberOfEvents, locations, warningText, tokenCheck } = this.state;

    return !tokenCheck ? (
      <Home />
    ) : (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <WarningAlert text={warningText} />
        {this.renderData()}
      </div>
    );
  }
}

export default App;
