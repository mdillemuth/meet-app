import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

class EventList extends Component {
  // Displays events passed from App component
  render() {
    const { events } = this.props;
    return !events ? (
      <div></div>
    ) : (
      <ul className='EventList'>
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
