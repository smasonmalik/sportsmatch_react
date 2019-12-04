import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios'
import Script from 'react-load-script';
import ReactGoogleMapLoader from "react-google-maps-loader";


const MY_API_KEY = "AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8"

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'tennis'
    }
  }


  render() {
    return (
      <div>

        <iframe
            width="600"
            height="450"
            frameborder="0"
            src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8&q=tennis+near+"+this.props.postcode+"&zoom=12"} allowfullscreen>
          </iframe>
      </div>
    )
  }


}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8")
})(Location)
