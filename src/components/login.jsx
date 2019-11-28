import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let self = this;
    axios
      .post("/api/v1/players/login", {
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value
      })
      .then(function(response) {
        console.log(response);
        console.log(response.data.jwt_token)
        self.props.updateAuthState(
          response.data.jwt_token,
          response.data.user_id
        );
        localStorage.setItem('jwtToken', response.data.jwt_token)
      })
      .catch(function(error) {
        console.log(error);
      });
    }

  render() {
    if (this.props.authToken) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div className="form-container">
          <h4>Log in</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-login"
          >
            <div className="form-group">
              <input
                id="email-input"
                name="email"
                placeholder="email"
                type="text"
                required="required"
                className="email form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="password-input"
                name="password"
                placeholder="password"
                type="password"
                className="password form-control"
                required="required"
              ></input>
            </div>
            <div className='row'>
              <div className='col'>
              <div className="form-group">
              <button
                name="login"
                type="submit"
                className="login-button btn btn-primary"
                onClick={this.handleLogin}>
                Login
              </button>
            </div>
              </div>
            </div>

          </form>
          <NavLink to='/signup'>Sign Up</NavLink>
        </div>
      );
    }
  }
}
export default Login;
