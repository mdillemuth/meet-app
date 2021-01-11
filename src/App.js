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
  };

  render() {
    let locations = extractLocations(mockData);

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch locations={locations} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
