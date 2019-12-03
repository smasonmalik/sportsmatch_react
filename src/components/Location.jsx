import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Redirect } from 'react-router-dom'

class Location extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return  (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
       >
       <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    )
  }
}

export default Location
