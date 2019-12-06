import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import styles from './css/Player.module.css'

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

  getBio() {
    if (this.props.bio === null || this.props.bio.length === 0) {
      return <span></span>
    } else if (this.props.bio.length < 20 ) {
      return (<p className={`card-text ${styles.bio}`}>{this.props.bio}</p>)
    } else if (this.props.bio.length >= 20 ) {
      return (<p className={`card-text ${styles.bio}`}>{this.props.bio.substring(0,20)}...</p>)
    }
  }


  render() {
    return (

      <div class="card">
        <img src={this.state.profile_photo} alt="Profile" style={{height: '16rem'}}></img>
        <div class="card-body">
        <h5 class="card-title">{this.props.firstName.charAt(0).toUpperCase() + this.props.firstName.slice(1)}</h5>
        <p class="card-text"><strong>{this.props.ability}</strong></p>
        <p class="card-text">{this.props.sport}</p>
        </div>
      </div>


    )
  }
}
export default Player
