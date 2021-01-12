import React, { Component } from "react";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import { extractLocations } from "./api";
import { mockData } from "./mock-data";
import "./styles/App.scss";

class App extends Component {
  state = {
    events: mockData,
    numEvents: 32,
  };

  handleUpdateEvents = (numEvents) => {
    const events = mockData.slice(0, numEvents);
    return this.setState({ numEvents, events });
  };

  render() {
    let locations = extractLocations(mockData);
    const { numEvents, events } = this.state;

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} />
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
