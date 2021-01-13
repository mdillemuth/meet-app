import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

NumberOfEvents.propTypes = {
  numEvents: PropTypes.string.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default NumberOfEvents;
