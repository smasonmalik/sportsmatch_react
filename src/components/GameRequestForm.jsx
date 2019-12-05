import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import FlashMessage from './FlashMessage'

class GameRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRequest: false
    }
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame(e) {
    e.preventDefault();
    let self = this;
    axios({
      method: 'post',
      url: "/api/v1/games/",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data:
      {
        organiser_id: parseInt(localStorage.getItem('user_id')),
        status: "pending",
        opponent_id: self.props.opponent_id,
        game_date: document.getElementById("date-input").value,
        game_time: document.getElementById("time-input").value
      }})

      .then(function(response) {
        console.log(response);
      })
      .then(function() {
        self.setState({
          gameRequest: true
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  gameDateValidation(e) {
    var element = document.getElementById("date-input");
    if(Date.parse(e.target.value) < new Date()) {
      // alert('Game date can\'t be in the past')
      element.classList.add("form-control-error");
    } else {
      element.classList.remove("form-control-error");
    }
  }

  render() {
    var tempDate = new Date();
    var dayOfMonth = tempDate.getDate()
    if (dayOfMonth < 10) {
      dayOfMonth = '0' + dayOfMonth
    }
    var monthOfYear = tempDate.getMonth()+1
    if (monthOfYear < 10) {
      monthOfYear = '0' + monthOfYear
    }
    var date = tempDate.getFullYear() + '-' + monthOfYear + '-' + dayOfMonth ;

    if (this.state.gameRequest) {
      return (
        <Redirect to="/profile" />
      )}
      else {
       return (
        <div className="form-container">
          <h4>Request Game</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-game-request"
          >
            <div className="form-group">
            <input
              id="date-input"
              name="date"
              type="date"
              required="required"
              min={date}
              className="form-control"
              onChange={e => this.gameDateValidation(e)}
            ></input>
            </div>
            <div className="form-group">
            <input
              id="time-input"
              name="time"
              type="time"
              required="required"
              className="form-control"
            ></input>
            </div>
            <div>
              {this.state.errorMessage ?
                <FlashMessage
                  message={this.state.errorMessage}
                  type="error"
                /> : null }
            </div>
            <div className='row'>
              <div className='col'>
              <div className="form-group">
              <button
                name="requestGame"
                type="submit"
                className="request-button btn btn-primary"
                onClick={this.handleNewGame}>
                Request Game
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
export default GameRequest;
