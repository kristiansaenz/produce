import React, { useState, useEffect } from "react";
import { Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
import faker from 'faker'
import MapIcon from "../images/map.svg";
import FilterByCategory from "../components/Filter/FilterByCategory"

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ""
    };
  }

  options = [
    { key: 1, text: 'Fruits', value: 1 },
    { key: 2, text: 'Vegetables', value: 2 },
    { key: 3, text: 'Dairy', value: 3 },
  ]

  addressDefinitions = faker.definitions.address

  stateOptions = _.map(this.addressDefinitions.state, (state, index) => ({
    key: this.addressDefinitions.state_abbr[index],
    text: state,
    value: this.addressDefinitions.state_abbr[index],
  }))

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.handleFilterSubmit(event.target.value);
  };

  render() {
    return (
      <nav class="level filter-bar">
        <div class="level-left filter-by-category-container">
          
          {/* Filter Button + Categories */}
          <div class="level-item">
            <Dropdown
              multiple
              search
              selection
              closeOnChange
              options={this.options}
              placeholder='Filter...'
            />
          </div>
        </div>

        <div class="level-right">
          {/* Map Button */}
          <div class="level-item">
            <img
              src={MapIcon}
              className="map-button"
              onClick={() => this.props.handleMapClick()}
              alt="map"
            ></img>
          </div>

          {/* Location field + Search button */}

          
          <div class="level-item">
            {/* <div class="field has-addons"> */}
            {/* <div class="field">
              <p class="control">
                <input
                  class="input search-by-location"
                  type="text"
                  placeHolder="Austin, Texas"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </p> */}
              <Dropdown placeholder='State' search selection options={this.stateOptions} />

              {/* <p class="control">
                <button
                  onClick={() =>
                    this.props.handleFilterSubmit(this.state.value)
                  }
                  className="button is-location-input-right"
                >
                  Search
                </button>
              </p> */}
            {/* </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default FilterBar;
