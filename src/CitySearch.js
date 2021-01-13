import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    isShown: false,
  };

  handleItemClicked = (suggestion) => {
    // Closes suggestions menu
    this.setState({
      isShown: false,
    });

    // Resets events when user clicks 'show all cities'
    if (suggestion === 'all') {
      this.setState({
        query: '',
      });
      return this.props.updateEvents(suggestion);
    }

    // Sets events to user's selected location
    this.setState({
      query: suggestion,
    });
    this.props.updateEvents(suggestion);
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
      isShown: true,
    });
  };

  // Suggestions only display when user has entered a query
  renderSuggestionStyle = () => {
    return this.state.isShown ? 'suggestions show-suggestions' : 'display-none';
  };

  render() {
    const { query, suggestions } = this.state;

    return (
      <div className='CitySearch'>
        <h2>Choose your nearest city</h2>
        <input
          type='text'
          className='city'
          value={query}
          onChange={this.handleChange}
        />
        <ul className={this.renderSuggestionStyle()}>
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
