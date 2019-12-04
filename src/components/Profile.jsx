import React from 'react'
import axios from 'axios'
import GameRequests from './GameRequests'
// import SingleResult from './SingleResult'
import EditImageForm from './EditImageForm'
import EditBioForm from './EditBioForm'
import { NavLink, Redirect } from 'react-router-dom'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      showImageForm: false,
      showBioForm: false,
      profile_photo: process.env.PUBLIC_URL + "/avatar.png"
    }
    this.handleClickImage = this.handleClickImage.bind(this)
    this.handleEditImage = this.handleEditImage.bind(this)
    this.handleClickBio = this.handleClickBio.bind(this)
    this.handleEditBio = this.handleEditBio.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
    this.getPhoto()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.imageEdited !== prevState.imageEdited) {
      this.getPhoto()
    }
    if (this.state.bioEdited !== prevState.bioEdited) {
      this.getPlayer()
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

  handleClickImage() {
    this.setState(prevState => {
      return { showImageForm: !prevState.showImageForm }
    })
  }

  handleClickBio() {
    this.setState(prevState => {
      return { showBioForm: !prevState.showBioForm }
    })
  }

  handleEditImage(value) {
    if (value === ""){
      value = process.env.PUBLIC_URL + "/avatar.png"
    }
    this.setState(prevState => {
      return { 
        profile_photo: value,
        showImageForm: !prevState.showImageForm
      }
    })
  }

  handleEditBio(value) {
    var updated_player = this.state.player
    updated_player.bio = value
    console.log(updated_player)
    this.setState(prevState => {
      return {
        player: updated_player,
        showBioForm: !prevState.showBioForm 
      }
    })
  }


  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Profile Page
          </div>
          <img className="align-self-start mr-3 rounded mx-auto d-block" onClick={this.handleClickImage} src={this.state.profile_photo} alt="Profile" style={{width: '10rem'}}></img>
          <div>
            {/* <button onClick={this.handleClickImage} className="btn btn-primary">{this.state.showImageForm ? "Hide" : "Edit Image" }</button> */}
            <div>{this.state.showImageForm ? <EditImageForm handleEditImage={this.handleEditImage}/> : '' }</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <div>
              {this.state.player.bio ? '': <button onClick={this.handleClickBio} className="btn btn-primary">Add your bio</button>}
              <div>{this.state.showBioForm ? <EditBioForm handleEditBio={this.handleEditBio}/>: '' }</div>
            </div>
            <p className="card-text">{this.state.player.location}</p>
            <p className="card-text">{this.state.player.bio}</p>
            <p className="card-test">{this.state.player.sport}</p>
            <p className="card-text">Gender: {this.state.player.gender ? this.state.player.gender.charAt(0).toUpperCase() + this.state.player.gender.slice(1) : ''}</p>
            <p className="card-text">{this.state.player.dob}</p>
            <p className="card-text">F.R.E.D. Ranking: {this.state.player.ability}</p>
            <p className="card-text">F.R.E.D. Points: {this.state.player.rank_points}</p>
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

export default Profile
