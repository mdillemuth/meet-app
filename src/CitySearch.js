import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
    });
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
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
          onChange={this.handleInputChanged}
        />
        <ul className='suggestions'>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key='all'>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
