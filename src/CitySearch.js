import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
  };

  handleItemClicked = (suggestion) => {
    // Resets events when user clicks 'show all cities'
    if (suggestion === 'showAll') {
      this.setState({
        query: '',
      });
      this.props.updateEvents(suggestion);
      return;
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
    });
  };

  // Suggestions only display when user has entered a query
  renderSuggestionStyle = () => {
    return this.state.query
      ? 'suggestions show-suggestions'
      : 'suggestions display-none';
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

export default CitySearch;
