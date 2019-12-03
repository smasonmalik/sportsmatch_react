import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Redirect } from 'react-router-dom'
import Script from 'react-load-script';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

const MY_API_KEY = "AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8"

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      value: ''
    }
  }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction)
        this.setState({search: "", value: geocodedPrediction.formatted_address})
    }

    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }

    handleStatusUpdate = (status) => {
        console.log(status)
    }


    render() {
          const {search, value} = this.state
          return (
              <ReactGoogleMapLoader
                  params={{
                      key: MY_API_KEY,
                      libraries: "places,geocode",
                  }}
                  render={googleMaps =>
                      googleMaps && (
                          <ReactGooglePlacesSuggest
                              googleMaps={googleMaps}
                              autocompletionRequest={{
                                  input: search,
                                  // Optional options
                                  // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                              }}
                              // Optional props
                              onNoResult={this.handleNoResult}
                              onSelectSuggest={this.handleSelectSuggest}
                              onStatusUpdate={this.handleStatusUpdate}
                              textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                              customRender={prediction => (
                                  <div className="customWrapper">
                                      {prediction
                                          ? prediction.description
                                          : "My custom no results text"}
                                  </div>
                              )}
                          >
                              <input
                                  type="text"
                                  value={value}
                                  placeholder="Search a location"
                                  onChange={this.handleInputChange}
                              />
                          </ReactGooglePlacesSuggest>
                      )
                  }
              />
          )
      }
}

export default Location;
