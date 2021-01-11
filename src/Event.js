import React, { Component } from "react";

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
          <h4>About Event</h4>
          <a className='link' href={event.htmlLink}>
            See details on Google Calendar
          </a>
          <p className='description'>{event.description}</p>
        </div>
      );
    }
  };

  renderButtonText = () => {
    return !this.state.isExpanded ? "Show details" : "Hide details";
  };

  render() {
    const { event } = this.props;

    return (
      <div className='Event'>
        <h2 className='summary'>{event.summary}</h2>
        <div className='start-dateTime'>{event.start.dateTime}</div>
        <span className='start-timeZone'>{event.start.timeZone}</span>
        <div className='location'>{event.location}</div>
        <div>{this.renderExpandedComponent()}</div>
        <button
          type='button'
          className='btn-details'
          onClick={this.handleExpandEvent}
        >
          {this.renderButtonText()}
        </button>
      </div>
    );
  }
}

export default Event;
