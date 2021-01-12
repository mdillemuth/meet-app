import React from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ numEvents, handleUpdateEvents }) => {
  // Updates App numEvents state on input change
  const onNumChange = (event) => {
    const value = event.target.value;
    handleUpdateEvents(value);
  };

  return (
    <div className='NumberOfEvents'>
      <h2>Number of events</h2>
      <input
        type='number'
        className='number'
        value={numEvents}
        onChange={onNumChange}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  numEvents: PropTypes.number,
  handleUpdateEvents: PropTypes.func,
};

export default NumberOfEvents;
