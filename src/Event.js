import React, { Component } from 'react';

class Event extends Component {
  state = {
    isExpanded: false,
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

  renderExpandedComponent = () => {
    if (this.state.isExpanded) {
      return (
        <div className='Expanded-Event'>
          <div className='about'></div>
          <div className='link'></div>
          <div className='description'></div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='Event'>
        <div className='summary'></div>
        <div className='start-dateTime'></div>
        <div className='start-timeZone'></div>
        <div className='location'></div>
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
