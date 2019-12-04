import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_photo: process.env.PUBLIC_URL + "/avatar.png"
    };
    this.getPhoto = this.getPhoto.bind(this);
  }

  componentDidMount() {
    this.getPhoto()
  };

  getPhoto() {
    let self = this;
    axios({
      url: `/api/v1/players/${this.props.id}/image`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        if (response.data.profile_image){
          self.setState({ profile_photo: response.data.profile_image })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }


  render() {
    return (
      <div className="media">
        <img className="align-self-start mr-3 rounded mx-auto d-block" src={this.state.profile_photo} alt="Profile" style={{width: '10rem'}}></img>
        <div className="media-body">
          <h5 className="mt-0">{this.props.firstName}</h5>
          <p className="card-text">{this.props.ability}</p>
          <NavLink className="view-profile btn btn-primary" to={`/player/${this.props.id}`}>View Profile</NavLink>
        </div>
      </div>
    )
  }
}
export default Player

// <p className="card-text">{this.props.bio.substring(0,20)}...</p>
