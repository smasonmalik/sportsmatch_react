import React from 'react'
import axios from 'axios'
import SingleGameRequest from './SingleGameRequest'
import styles from './css/GameRequests.module.css'
import { IoIosArrowDown } from 'react-icons/io'

class GameRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests_organiser: [],
      requests_challenger: []

    }
    this.getRequest = this.getRequest.bind(this)

  }

  componentDidMount() {
    this.getRequest()
  };

  getRequest() {
    let self = this;
    axios({
      url: "/api/v1/games/",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      self.setState({
        requests_challenger: response.data.challenger_games,
        requests_organiser: response.data.organiser_games
      })
    })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (<div>
      <h2 className={styles.header}>Your Game Requests</h2>

      <div id="accordion">
        <div class="card">
          <div className = {`card-header ${styles.cardHeader}`}  >
            <h5 class="mb-0">
              <button className = {`btn btn-link collapsed  ${styles.requestsHeader}`}  data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <h3>Requests Made <span className={styles.arrow}><IoIosArrowDown /></span> </h3>
              </button>
            </h5>
          </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">

        <ul className="list-group list-group-flush">
          {this.state.requests_organiser.map(result => (
            <SingleGameRequest
              key={result.id}
              id={result.id}
              organiser_id={result.organiser_id}
              opponent_id={result.opponent_id}
              opponent_name={result.first_name}
              game_date={result.game_date}
              game_time={result.game_time}
              status={result.status}
            />
            ))}
          </ul>
    </div>
  </div>
  <div class="card">
    <div className = {`card-header ${styles.cardHeader}`} >
      <h5 class="mb-0">
        <button className = {`btn btn-link collapsed ${styles.requestsHeader}`} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h3>Challenges Received <IoIosArrowDown /> </h3>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      <ul className="list-group list-group-flush">
            {this.state.requests_challenger.map(result => (
              <SingleGameRequest
                key={result.id}
                id={result.id}
                organiser_id={result.organiser_id}
                opponent_id={result.opponent_id}
                opponent_name={result.first_name}
                game_date={result.game_date}
                game_time={result.game_time}
                status={result.status}
                />
              ))}
            </ul>
      </div>
    </div>
  </div>
  
</div>





      
    </div>
    )
  }
}

export default GameRequests


{/* <div class="container">
        <div class="row">
          <div class="col-6">
          <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <h3>Requests Made</h3>
          </a>
          
          <div class="collapse" id="collapseExample">
          <ul className="list-group list-group-flush">
          {this.state.requests_organiser.map(result => (
            <SingleGameRequest
              key={result.id}
              id={result.id}
              organiser_id={result.organiser_id}
              opponent_id={result.opponent_id}
              opponent_name={result.first_name}
              game_date={result.game_date}
              game_time={result.game_time}
              status={result.status}
            />
            ))}
          </ul>
          </div>

          </div>


          <div class="col-6">
          <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <h3>Challenges Recieved</h3>
          </a>
          <div class="collapse" id="collapseExample">
            <ul className="list-group list-group-flush">
            {this.state.requests_challenger.map(result => (
              <SingleGameRequest
                key={result.id}
                id={result.id}
                organiser_id={result.organiser_id}
                opponent_id={result.opponent_id}
                opponent_name={result.first_name}
                game_date={result.game_date}
                game_time={result.game_time}
                status={result.status}
                />
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div> */}