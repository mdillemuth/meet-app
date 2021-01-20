import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  // For debounce function
  constructor() {
    super();
    this.throttleHandleChange = debounce(
      this.throttleHandleChange.bind(this),
      1500
    );
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    numberOfEvents: '10',
    errorText: '',
  };

  throttleHandleChange(value) {
    this.props.updateEvents(null, value);
  }

  // When user changes number value
  handleChange = (event) => {
    const value = event.target.value;

    if (value < 0) {
      this.setState({
        errorText: 'Please enter a positive number of events',
      });
    } else if (value < 1) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Please specify at least 1 event to be displayed',
      });
    } else {
      this.setState({ errorText: '', numberOfEvents: value });
      this.throttleHandleChange(value);
    }
  };

  render() {
    const { numberOfEvents, errorText } = this.state;
    return (
      <div className='NumberOfEvents'>
        <label>Number of events</label>
        <input
          type='number'
          className='number'
          value={numberOfEvents}
          onChange={this.handleChange}
        />
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}

NumberOfEvents.propTypes = {
  numberOfEvents: PropTypes.string.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default NumberOfEvents;
