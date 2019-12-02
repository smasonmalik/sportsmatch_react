import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isProfileEdited: false
    }
    this.handleEdit = this.handleEdit.bind(this)
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
          email: document.getElementById("email-input").value,
          first_name: document.getElementById("first-name-input").value,
          last_name: document.getElementById("last-name-input").value,
          gender: document.getElementById("gender-input").value,
          dob: document.getElementById("dob-input").value,
          ability: document.getElementById("ability-input").value,
          postcode: document.getElementById("postcode-input").value
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

  render() {
    if (this.state.isProfileEdited) {
      return <Redirect to="/profile" />
    } else {
    return (
      <div className="form-container">
          <h4>Sign Up</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
             >
            <div className="form-group">
              <input
                id="first-name-input"
                name="first-name"
                placeholder="First Name"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="last-name-input"
                name="last-name"
                placeholder="Last Name"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label> Date of Birth </label>
              <input
                id="dob-input"
                name="dob"
                type="date"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <select
                id="ability-input"
                name="ability"
                placeholder="Ability"
                type="select"
                required="required"
                className="form-control"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="gender-input"
                name="gender"
                placeholder="Gender"
                type="text"
                required="required"
                className="form-control"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_say">Rather Not Say</option>
              </select>
            </div>
            <div className="form-group">
              <input
                id="email-input"
                name="email"
                placeholder="Email"
                type="text"
                required="required"
                className="email form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="postcode-input"
                name="postcode"
                placeholder="Postcode"
                type="text"
                required="required"
                className="form-control"
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
