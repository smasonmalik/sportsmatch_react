import React from 'react'
import axios from 'axios'
import SinglePastGame from './SinglePastGame'
import SingleResult from './SingleResult'

class GamesResultOrganiser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      organiserResults: []
    }
    this.getOrganiserResultsRequest = this.getOrganiserResultsRequest.bind(this)
  }

  componentDidMount() {
    this.getOrganiserResultsRequest()
  };


  getOrganiserResultsRequest() {
    let self = this;
    axios({
      url: "/api/v1/results/organiser",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          organiserResults: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    var gameid = this.props.game_id
    console.log("Organiser gameid", gameid)
    return (
      <div>
        {this.state.organiserResults.map(result => {
          if(gameid === result.id){
            return (
              <div>
              <div>
              <SinglePastGame 
                key={result.id}
                game_id={this.props.game_id}
                confirmed={this.props.confirmed}
                organiser_id={this.props.organiser_id}
                opponent_id={this.props.opponent_id}
                game_date={this.props.game_date}
                game_time={this.props.game_time}></SinglePastGame>
              </div>
            
            <div>
              <SingleResult 
                key={result.id}
                game_id={result.game_id}
                winner_id={result.winner_id}
                loser_id={result.loser_id}
                confirmed={result.confirmed}
                handleEdit={this.props.handleEdit}
              />
            </div>
            </div>
           )} else {
            return (<div>
              <SinglePastGame 
                key={result.id}
                game_id={this.props.game_id}
                confirmed={this.props.confirmed}
                organiser_id={this.props.organiser_id}
                opponent_id={this.props.opponent_id}
                game_date={this.props.game_date}
                game_time={this.props.game_time}></SinglePastGame>
              </div>)
           }
        })}
      </div>
      )
    }
  }

export default GamesResultOrganiser;
