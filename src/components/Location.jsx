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

  handleScriptLoad = () => {
    const options = {
      types: ['(cities)'],
    };

    // this.autocomplete = new google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete'),
    //   options,
    // );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(['address_components', 'formatted_address']);

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect = () => {

    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }

  render() {
    return (
      <div>


      </div>
    );
  }
}

export default Location;

// <Script
//   url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8&libraries=places"
//   onLoad={this.handleScriptLoad}
// />
// <SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
//   style={{
//     margin: '0 auto',
//     maxWidth: 800,
//   }}
// />
