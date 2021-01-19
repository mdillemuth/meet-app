import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.throttleHandleChange = debounce(
      this.throttleHandleChange.bind(this),
      500
    );
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    numberOfEvents: '24',
  };

  throttleHandleChange(value) {
    this.props.updateEvents(null, value);
  }

  // When user changes number value
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.throttleHandleChange(value);
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className='NumberOfEvents'>
        <label>Number of events</label>
        <input
          type='number'
          className='number'
          value={numberOfEvents}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

NumberOfEvents.propTypes = {
  numberOfEvents: PropTypes.string.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default NumberOfEvents;
