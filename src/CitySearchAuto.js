import React, { Component } from 'react';

// Material UI imports
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class CitySearchAuto extends Component {
  state = {
    query: '',
  };

  onChange = (event, location, reason) => {
    this.props.updateEvents(location);

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
          id='location'
          options={this.props.locations}
          getOptionLabel={(option) => option}
          size='small'
          onChange={this.onChange}
          onClose={this.onClose}
          fullWidth
          renderInput={(params) => <TextField {...params} variant='outlined' />}
        />
      </div>
    );
  }
}

export default CitySearchAuto;
