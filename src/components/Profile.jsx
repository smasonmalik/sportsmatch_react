import React from 'react'
import axios from 'axios'
import { Redirect, NavLink } from 'react-router-dom';
import GameRequests from './GameRequests'
import EditImageForm from './EditImageForm'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      gameConfirmed: false,
      showImageForm: false,
      imageEdited: false,
      profile_photo: process.env.PUBLIC_URL + "/avatar.png"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEditImage = this.handleEditImage.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
    this.getPhoto()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.imageEdited !== prevState.imageEdited) {
      this.getPhoto()
    }
  }

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
        self.setState({ profile_photo: response.data.profile_image })
      }
    })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleClick() {
    this.setState(prevState => {
      return { showImageForm: !prevState.showImageForm }
    })
  }

  handleEditImage() {
    this.setState(prevState => {
      return { imageEdited: !prevState.imageEdited }
    })
  }

  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Profile Page
          </div>
          <img className="align-self-start mr-3 rounded mx-auto d-block" src={this.state.profile_photo} alt="Profile" style={{width: '10rem'}}></img>
          <div>
          <button onClick={this.handleClick} className="btn btn-primary">{this.state.showImageForm ? "Edit Image" : "Hide"}</button>
            <p>{this.state.showImageForm ? '' : <EditImageForm handleEditImage={this.handleEditImage}/>}</p>
            </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">Ability: {this.state.player.ability}</p>
            <p className="card-text">F.R.E.D: {this.state.player.rank_points} points</p>
            <p className="card-text">Gender: {this.state.player.gender}</p>
            <p className="card-text">D.O.B: {this.state.player.dob}</p>
            <p className="card-text">{this.state.player.bio}</p>
            <p className="card-test">{this.state.player.sport}</p>
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
          <Redirect to='/' />
        </div>
      )
    }
  }
}

// <button onClick={this.handleClick} className="btn btn-primary">{this.state.showBio ? "Edit bio" : "Hide"}</button>
// <p>{this.state.showBio ? '' : <EditBioForm handleEditBio={this.handleEditBio}/>}</p>


export default Profile
