import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      gender: '',
      ability: '',
      postcode: '',
      sport: '',
      bio: '',
      isProfileEdited: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
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
      self.setState({
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email,
        gender: response.data.gender,
        ability: response.data.ability,
        postcode: response.data.postcode,
        sport: response.data.sport,
        bio: response.data.bio
      })
    })
    .then(function(error) {
      console.log(error)
    })
  }

  handleEdit() {
      let self = this;
      axios({
        method: 'patch',
        url: "/api/v1/players/my_profile",
        headers: {
          "Content-Type": "application/json",
          "api-token": localStorage.getItem('jwtToken')
        },
        data: {
          email: this.state.email,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          gender: this.state.gender,
          ability: this.state.ability,
          sport: this.state.sport,
          bio: this.state.bio
        }
      })
      .then(function() {
        self.setState(prevState => {
          return {isProfileEdited: !prevState.isProfileEdited}
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    if (this.state.isProfileEdited) {
      return <Redirect to="/profile" />
    } else {
    return (
      <div className="form-container">
          <h4>Edit Profile</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
             >
            <div className="form-group">
              <input
                id="first-name-input"
                name="first_name"
                placeholder={this.state.first_name}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <input
                id="last-name-input"
                name="last_name"
                placeholder={this.state.last_name}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <input
                id="bio-name-input"
                name="bio"
                placeholder={this.state.bio}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Select ability:</label>
              <select
                id="ability-input"
                name="ability"
                placeholder={this.state.ability}
                type="select"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value={this.state.ability}>-----</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select main sport:</label>
              <select
                id="sport-input"
                name="sport"
                placeholder={this.state.sport}
                type="text"
                required="required"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value={this.state.sport}>-----</option>
                <option value="Tennis">Tennis</option>
                <option value="TableTennis">TableTennis</option>
                <option value="Squash">Squash</option>
                <option value="Badminton">Badminton</option>
                <option value="Snooker">Snooker</option>
                <option value="Climbing">Climbing</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select gender:</label>
              <select
                id="gender-input"
                name="gender"
                placeholder={this.state.gender}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value={this.state.gender}>-----</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_say">Rather Not Say</option>
              </select>
            </div>
            <div className="form-group">
              <input
                id="email-input"
                name="email"
                placeholder={this.state.email}
                type="text"
                className="email form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="form-group">
                  <button
                    name="edit"
                    type="submit"
                    className="edit-button btn btn-primary"
                    onClick={this.handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }

  }
}

export default EditProfileForm
