import React from 'react'
import axios from 'axios'
import { Redirect, NavLink } from 'react-router-dom';
import GameRequests from './GameRequests'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      gameConfirmed: false,
      photo: "avatar.png"
    }
  }

  componentDidMount() {
    this.getPlayer()
    // this.getPhoto()
  };

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${localStorage.getItem('user_id')}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      self.setState({player: response.data})
    })
    .then(function(error) {
      console.log(error)
    })
  }

  getPhoto() {
    let self = this;
    axios({
      url: `/api/v1/players/${localStorage.getItem('user_id')}/image`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      if (response.data.profile_image){
        self.setState({ photo: response.data.profile_image })
      }
    })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Profile Page
          </div>
          <img className="align-self-start mr-3" className="rounded mx-auto d-block" src={this.state.photo} alt="Profile" style={{width: '10rem'}}></img>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">{this.state.player.ability}</p>
            <p className="card-text">{this.state.player.gender}</p>
            <p className="card-text">{this.state.player.dob}</p>
            <ul className="list-group list-group-flush">
              <div>
                <NavLink to="/profile/edit">Edit Profile</NavLink>
              </div>
            </ul>
            <GameRequests handleGameRefresh={this.handleGameRefresh}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Redirect to='/login' />
        </div>
      )
    }
  }
}


export default Profile
