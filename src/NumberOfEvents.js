import React, { Component } from 'react';

class NumberOfEvents extends Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className='NumberOfEvents'>
        <h2>Number of events</h2>
        <input
          type='number'
          className='number'
          value={this.props.numEvents}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
