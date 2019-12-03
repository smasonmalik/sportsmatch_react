import React from 'react'
import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { distance: this.props.distance };
      }

  render() {
    return (
        <div>
        <form>
            <div className="row">
                <div className="col">

                    <label className="label">Filter By F.R.E.D. Ability:</label>
                    <select className="custom-select" name="ability" id="ability-select" onChange={(e) => this.props.handleChange(e)}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label">Filter By Distance(km):</label>
                    <div>
                    <InputRange
                        maxValue={50}
                        minValue={1}
                        formatLabel={value => `${value} km`}
                        value={this.state.distance}
                        onChange={value => this.setState({ distance: value })}
                        onChangeComplete={this.props.updateDistance}/>
                    </div>
                </div>
                <div className="col">
                    <label className="label">Filter By Sport:</label>
                    <select className="custom-select" name="sport" id="sport-select" onChange={(e) => this.props.handleChange(e)}>
                        <option value="Tennis">Tennis</option>
                        <option value="TableTennis">TableTennis</option>
                        <option value="Squash">Squash</option>
                        <option value="Badminton">Badminton</option>
                    </select>
                </div>
            </div>
        </form>
        </div>
    )
  }
}
export default SearchBar
