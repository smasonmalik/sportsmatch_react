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
        <div className={`card ${styles.col}`}>
          <div className={styles.crop}>
            <img src={this.state.profile_photo} alt="Profile"></img>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <h5 className="card-title">{this.props.firstName}</h5>
            {this.getBio()}
            <p className="card-text"><strong>{this.props.sport}</strong></p>
            <p className="card-text">{this.props.ability}</p>
            <div class="card-body">
              <NavLink className={styles.viewProfile} to={`/player/${this.props.id}`}>View Profile</NavLink>
            </div>
          </div>
        </div>
    )
  }
}
export default Player
