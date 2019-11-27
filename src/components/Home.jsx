import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

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
    axios({
      url: "/api/v1/players",
      mode: "no-cors"
    })
      .then(function(response) {
        console.log(response)
        this.setState({ players: response })
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
            {this.props.blob}
          </div>
        )
      }
  }
}
export default Home;
