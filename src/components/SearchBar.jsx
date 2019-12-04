import React from 'react'
import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'
import styles from './css/SearchBar.module.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          distance: this.props.distance
        };
      }

  render() {
    return (
        <div className={`container ${styles.myContainer}`}>
          <h5>Filter your search results:</h5>
        <form>
            <div className="row justify-content-between">
                <div className={`col-lg-5 col-md-5 col-sm-12 ${styles.col}`}>
                    <label className={`label ${styles.label}`}>Ability(F.R.E.D.)</label>
                    <select className="custom-select" name="ability" id="ability-select" onChange={(e) => this.props.handleChange(e)}>
                        <option value={this.props.ability}>{this.props.ability}</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className={`col-lg-5 col-md-5 col-sm-12 ${styles.col}`}>
                    <label className={`label ${styles.label}`}>Distance(km)</label>
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
            </div>
        </form>
        </div>
    )
  }
}
export default SearchBar
