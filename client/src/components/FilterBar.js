import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import faker from "faker";
import MapIcon from "../images/map.svg";
import FilterByCategory from "./Filter/FilterByCategory";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      produceValue: ""
    };
  }

  options = [
    { key: 1, text: 'Fruits', value: 'fruits' },
    { key: 2, text: 'Vegetables', value: 'vegetables' },
    { key: 3, text: 'Dairy', value: 'dairy' },
  ]

  addressDefinitions = faker.definitions.address;

  stateOptions = _.map(this.addressDefinitions.state, (state, index) => ({
    key: this.addressDefinitions.state_abbr[index],
    text: state,
    value: this.addressDefinitions.state_abbr[index]
  }));

  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(event.target.value)
    this.props.handleFilterSubmit(event.target.value);
  };

  handleProduceFilterChange = event => {
    
  }

  render() {
    return (
      <nav className="level filter-bar">
        <div className="level-left filter-by-category-container">
          {/* Filter Button + Categories */}
          <div className="level-item">
            <Dropdown
              multiple
              search
              selection
              closeOnChange
              onChange={this.handleProduceFilterChange}
              options={this.options}
              placeholder="Filter..."
            />
          </div>
        </div>

        <div className="level-right">
          {/* Map Button */}
          {/* <div class="level-item">
            <img
              src={MapIcon}
              className="map-button"
              onClick={() => this.props.handleMapClick()}
              alt="map"
            ></img>
          </div> */}

          {/* Location field + Search button */}

          <div className="level-item">
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
            <div className="button map-button">
              <img
                src={MapIcon}
                className="map-icon"
                onClick={() => this.props.handleMapClick()}
                alt="map"
              ></img>
            </div>
            <Dropdown
              placeholder="State"
              search
              selection
              options={this.stateOptions}
            />

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
