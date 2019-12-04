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
      query: 'tennis',
      user_postcode: '',
      current_user_longitude: ''
    }
  }

  render() {
    return (
      <div>
        <iframe
            width="600"
            height="450"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8
              &q=tennis+near+se21&zoom=12" allowfullscreen>
          </iframe>
      </div>
    )
  }


}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCebk-zVczbBH1Q6lxdk8AQgvdScWJM2E8")
})(Location)



// componentDidMount(){
//   this.getCurrentUserLocation();
// }
//
// getCurrentUserLocation(){
//   let self = this;
//   let current_user_id = localStorage.getItem('user_id');
//   axios({
//     url: `/api/v1/players/${current_user_id}`,
//     headers: {
//       "Content-Type": "application/json",
//       "api-token": localStorage.getItem('jwtToken')
//     }
//   })
//     .then(function(response) {
//       if (response.data){
//         self.setState({
//           current_user_latitude: parseFloat(response.data.latitude),
//           current_user_longitude: parseFloat(response.data.longitude)
//       })
//       }
//     })
//     .catch(function(error) {
//       console.log(error)
//     })
// }
//
// render() {
//     const latitude = this.state.current_user_latitude
//     const longitude = this.state.current_user_longitude
//
//     if (latitude && longitude) {
//       return (
//           <div>
//               <h2> Find a sports centre: </h2>
//                 <Map
//                 google={this.props.google}
//                 zoom={14}
//                 initialCenter={{ lat: latitude, lng: longitude}}
//                 >
//
//             <Marker onClick={this.onMarkerClick}
//                     name={'Current location'} />
//
//             <InfoWindow onClose={this.onInfoWindowClose}>
//
//             </InfoWindow>
//           </Map>
//         </div>
//
//         )
//     } else {
//         return (
//             <div><h1>Map is loading...</h1></div>
//         )
//     }
//
// }
