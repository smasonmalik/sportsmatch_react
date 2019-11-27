import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import { Test } from './Signup.styles';

class Signup extends Component { 
  constructor(props) {
    super(props);
  }


  render () {
    if (this.props.authToken) {
      return <Redirect to="/home" />;
    }
    else { 
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
              <label>Date of Birth</label>
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
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="last-name-input"
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
                id="password-input"
                name="password"
                placeholder="Password"
                type="password"
                className="password form-control"
                required="required"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="password-confirm-input"
                name="password-confirm"
                placeholder="Confirm Password"
                type="password"
                className="password form-control"
                required="required"
              ></input>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="form-group">
                  <button
                    name="signup"
                    type="submit"
                    className="signup-button btn btn-primary"
                    onClick={this.handleSignup}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
    }
  }
}

export default Signup;
