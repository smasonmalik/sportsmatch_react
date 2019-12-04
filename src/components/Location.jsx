import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Redirect } from 'react-router-dom'
import Script from 'react-load-script';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

const MY_API_KEY = "AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8"



class Location extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   search: '',
    //   value: ''
    // }
  }

  render() {
    return (
      <div>
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          // <div>
          //   <h1>{this.state.selectedPlace.name}</h1>
          // </div>
        </InfoWindow>
      </Map>
    </div>

    )
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8")
})(Location)
