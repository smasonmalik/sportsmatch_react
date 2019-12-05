import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

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
        <iframe title="GoogleMap"
            width="600"
            height="450"
            src={"https://www.google.com/maps/embed/v1/search?key="+API_KEY+"&q=tennis+near+"+this.props.postcode+"&zoom=12"}>
          </iframe>
      </div>
    )
  }


}
export default Location;
