import React, { Component } from 'react';

class Event extends Component {
  state = {
    isExpanded: false, // Event is collapsed by default
  };

  // Toggle expand/collapse event on click
  handleExpandEvent = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else {
      this.setState({
        isExpanded: false,
      });
    }
  };

  // The elements displayed when event is expanded
  renderExpandedComponent = () => {
    const { event } = this.props;

    if (this.state.isExpanded) {
      return (
        <div className='Expanded-Event'>
          <a className='link'>{event.htmlLink}</a>
          <p className='description'>{event.description}</p>
        </div>
      );
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className='Event'>
        <h2 className='summary'>{event.summary}</h2>
        <div className='start-dateTime'>{event.start.dateTime}</div>
        <div className='start-timeZone'>{event.start.timeZone}</div>
        <div className='location'>{event.location}</div>
        <button
          type='button'
          className='btn-details'
          onClick={this.handleExpandEvent}
        ></button>
        {this.renderExpandedComponent()}
      </div>
    );
  }
}

export default Event;
