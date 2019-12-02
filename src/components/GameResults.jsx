import React from 'react'
import axios from 'axios'
import PastGames from './PastGames'
import Results from './Results'

class GameResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
      return (
      <div>
        <PastGames />
        <Results />
      </div>
      )
    }
  }


export default GameResults;
