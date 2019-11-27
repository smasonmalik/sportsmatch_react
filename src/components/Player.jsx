import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.firstName}</h5>
          <p className="card-text">{this.props.ability}</p>
          <p className="card-text">{this.props.gender}</p>
          <a className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
export default Player
