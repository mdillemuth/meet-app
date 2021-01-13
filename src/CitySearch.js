import React, { Component } from 'react';

// Material UI imports
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class CitySearch extends Component {
  // Updates filtered events on selection
  onChange = (event, location, reason) => {
    if (location === 'See all cities') {
      return this.props.updateEvents('all');
    }

    this.props.updateEvents(location);

    // Resets events when user clears selection
    if (reason === 'clear') {
      this.props.updateEvents('all');
    }
  };

  render() {
    return (
      <div>
        <h2>Choose your nearest city</h2>
        <Autocomplete
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            width: 250,
          }}
          className='city'
          options={this.props.locations}
          getOptionLabel={(option) => option}
          size='small'
          onChange={this.onChange}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} className='suggestions' variant='outlined' />
          )}
        />
      </div>
    );
  }
}

export default CitySearch;
