import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import setAuthToken from '../setAuthToken'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    this.getPlayers = this.getPlayers.bind(this);
  }

  componentDidMount() {
    this.getPlayers()
  };

  getPlayers() {
    let self = this;
    axios({
      url: "/api/v1/players",
      headers: {
        "Content-Type": "application/json",
        "api-token": self.props.authToken
      }
      // headers: {`Authorization: Bearer ${token}`}
    })
      .then(function(response) {
        console.log(response)
        self.setState({ players: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
      if (this.props.authToken) {
        return (
          this.props.authToken
        )
      } else {
        return(
          <div>
            <Redirect to='/login' />
          </div>
        )
      }
  }
}
export default Home;
