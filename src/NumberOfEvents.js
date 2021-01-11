import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numEvents: value,
    });
  };

  render() {
    const { numEvents } = this.state;

    return (
      <div className='NumberOfEvents'>
        <h2>Number of events</h2>
        <input
          type='text'
          className='number'
          value={numEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
