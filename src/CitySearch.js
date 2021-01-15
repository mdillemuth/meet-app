import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    locations: this.props.locations,
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);

    // Resets events when user clicks 'show all cities'
    // if (suggestion === 'all') {
    //   this.setState({
    //     query: '',
    //   });
    //   return this.props.updateEvents(suggestion);
    // }
  };

  // Displays suggestions based on user input (autocomplete feature)
  handleChange = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
      showSuggestions: true,
    });
  };

  render() {
    const { query, suggestions, showSuggestions } = this.state;

    return (
      <div className='CitySearch'>
        <h2>Choose your nearest city</h2>
        <input
          type='text'
          className='city'
          value={query}
          onChange={this.handleChange}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul
          className='suggestions'
          style={showSuggestions ? {} : { display: 'none' }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

CitySearch.propTypes = {
  locations: PropTypes.array.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default CitySearch;
