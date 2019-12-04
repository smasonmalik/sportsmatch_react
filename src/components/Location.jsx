import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Script from 'react-load-script';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

const MY_API_KEY = "AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8"

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user_latitude: '',
      current_user_longitude: '',
      value: ''
    }
    this.getCurrentUserLocation = this.getCurrentUserLocation.bind(this);
  }

  componentDidMount(){
    this.getCurrentUserLocation();
  }

  getCurrentUserLocation(){
    let self = this;
    let current_user_id = localStorage.getItem('user_id');
    axios({
      url: `/api/v1/players/${current_user_id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        if (response.data){
          self.setState({ 
            current_user_latitude: parseFloat(response.data.latitude),
            current_user_longitude: parseFloat(response.data.longitude)
        })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
      const latitude = this.state.current_user_latitude
      const longitude = this.state.current_user_longitude
    return (
      <div>
          <h2> Find a sports centre: </h2>
        {console.log("lat", this.state.current_user_latitude)}
        {console.log("long", this.state.current_user_longitude)}
            <Map 
            google={this.props.google} 
            zoom={10}
            initialCenter={{ lat: latitude, lng: longitude}}
            >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          // <div>
          {/* //   <h1>{this.state.selectedPlace.name}</h1> */}
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
