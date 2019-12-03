import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Redirect } from 'react-router-dom'
import Script from 'react-load-script';
import SearchBar from 'material-ui-search-bar';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      query: ''
    }

  }

  // displayLocations = () => {
  //
  // }
  //
  // const mapStyles = {
  // width: '100%',
  // height: '100%'
  // }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default Location;
