import React, { Component } from 'react';
import Avatar from './Avatar.css'

class Avatar extends Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        };

    if (!image) return null;

    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} />
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import Map from './Map';
//
// class Location extends Component {
//   render() {
//     return(
//         <Map
//      google={this.props.google}
//      center={{lat: 18.5204, lng: 73.8567}}
//      height='300px'
//      zoom={15}
//     />
//       )
//   }
// }
// export default Location;
