import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ""
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
          console.log(response.data.profile_image)
          self.setState({ photo: response.data.profile_image })
        }
        else {
          self.setState({ photo: "avatar.png" })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }


  render() {
    return (
      <div className="media">
        <img class="align-self-start mr-3" src={this.state.photo} alt="Profile" style={{width: '10rem'}}></img>
        <div className="media-body">
          <h5 class="mt-0">{this.props.firstName}</h5>
          <p className="card-text">{this.props.ability}</p>
          <p className="card-text">{this.props.gender}</p>
          <NavLink className="view-profile btn btn-primary" to={`/player/${this.props.id}`}>View Profile</NavLink>
        </div>
      </div>
    )
  }
}
export default Player
