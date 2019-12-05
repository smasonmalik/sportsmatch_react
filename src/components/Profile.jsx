import React from 'react'
import axios from 'axios'
import GameRequests from './GameRequests'
// import SingleResult from './SingleResult'
import EditImageForm from './EditImageForm'
import EditBioForm from './EditBioForm'
import { NavLink, Redirect } from 'react-router-dom'
import styles from './css/Profile.module.css'
import { FaPencilAlt } from 'react-icons/fa'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: {},
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

  mouseOverImage(){
    var profile_image_style = `${styles.profileImage}`
    document.getElementById("profile-image").classList.add(profile_image_style)
    var edit_label_style = `${styles.textBlock}`
    var edit_label_style_hide = `${styles.textBlockHide}`
    document.getElementById("edit-profile-image-label").classList.add(edit_label_style)
    document.getElementById("edit-profile-image-label").classList.remove(edit_label_style_hide)
  }

  mouseOutImage(){
    var profile_image_style = `${styles.profileImage}`
    document.getElementById("profile-image").classList.remove(profile_image_style)
    var edit_label_style = `${styles.textBlock}`
    var edit_label_style_hide = `${styles.textBlockHide}`
    document.getElementById("edit-profile-image-label").classList.remove(edit_label_style)
    document.getElementById("edit-profile-image-label").classList.add(edit_label_style_hide)  }

  getBio() {
    if (this.state.player.bio == null || this.state.player.bio.length == 0 ) {
      return (<p>Click 'Edit Profile' below to add in your bio</p>)
    } else {
      return (<p className="card-text" onClick={this.handleClickBio}>Bio: {this.state.player.bio}</p>)
    }
  }

  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <div>
        <div className = {`${styles.profileContainer}`}>
          <h3 className={styles.header}>MY PROFILE</h3>
          <div className = {`${styles.pictureContainer}`}>
            <img 
              id="profile-image" 
              className="align-self-start mr-3 rounded mx-auto d-block" 
              onMouseOver={this.mouseOverImage} 
              onMouseOut={this.mouseOutImage} 
              onClick={this.handleClickImage} 
              src={this.state.profile_photo} 
              alt="Profile" 
              className = {`${styles.profilePic}`}>
            </img>
            <div id="edit-profile-image-label" className = {`${styles.textBlockHide}`}>Click To Edit</div>
          </div>
          <div>
            <div>{this.state.showImageForm ? <EditImageForm handleEditImage={this.handleEditImage}/> : '' }</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">Location: {this.state.player.location}</p>
            <p className="card-test">Chosen Sport: {this.state.player.sport}</p>
            <p className="card-text">Gender: {this.state.player.gender ? this.state.player.gender.charAt(0).toUpperCase() + this.state.player.gender.slice(1) : ''}</p>
            <p className="card-text">DOB: {this.state.player.dob}</p>
            <p className="card-text">Ranking: {this.state.player.ability}</p>
            <p className="card-text">Ranking Points: {this.state.player.rank_points}</p>
            {this.getBio()}
            <ul className="list-group list-group-flush">
              <div>
                <NavLink to="/profile/edit"><FaPencilAlt /> edit profile </NavLink>
              </div>
            </ul>
            
          </div>
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
