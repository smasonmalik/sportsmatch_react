import React from 'react'
import { NavLink } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        // this.onPlusClick = this.onPlusClick.bind(this)
        this.onMinusClick = this.onMinusClick.bind(this)
        this.onAbilityChange = this.onAbilityChange.bind(this);
      }

    onMinusClick(e){
        e.preventDefault();
    }

    onAbilityChange(){
        this.props.onAbilityUpdate(document.getElementById("ability-select").value)
    }

  render() {
    return (
        <form>
            <div className="row">
                <div className="col">
                    <label class="label">Filter By Distance(km):</label>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" onClick={this.props.onPlusClick}>
                                +
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.props.distance} min="1" max="100"/>
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                -
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <label className="label">Filter By Ability:</label>
                    <select className="custom-select" id="ability-select" onChange={this.onAbilityChange}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label">Filter By Age Group:</label>
                    <select className="custom-select" id="age-select">
                        <option value="16-19">16-19</option>
                        <option value="20-29">20-29</option>
                        <option value="30-39">30-39</option>
                        <option value="40-49">40-49</option>
                        <option value="50+">50+</option>
                    </select>
                </div>
            </div>
        </form>
    )
  }
}
export default SearchBar
