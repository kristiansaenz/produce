import React, { useState, useEffect } from 'react'
import FilterButton from '../images/filterbutton.svg'
import MapIcon from '../images/map.svg'
// import axios from 'axios'
// import Map from './Map'
// import BoothList from './BoothList'


class FilterBooths extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.handleFilterSubmit(event.target.value);
  }

  render() {
    return (
      <nav class="level" id="filter">
        <div class="level-left">

          {/* Filter Button */}
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>Filter By</strong>
            </p>
            <div class="filter-button"><img src={FilterButton} alt="filter-button"></img></div>
          </div>
        </div>

        <div class="level-right">

          {/* Map Button */}
          <div class="level-item">
            <img src={MapIcon} id="map" onClick={() => this.props.handleMapClick()} alt="map"></img>
          </div>

          {/* Location field + Search button */}
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input is-location-input-left" type="text" value={this.state.value} onChange={this.handleChange} />
              </p>
              <p class="control">
                <button onClick={() => this.props.handleFilterSubmit(this.state.value)}className="button is-location-input-right">Search</button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default FilterBooths