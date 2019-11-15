import React, { useState, useEffect } from "react";
import MapIcon from "../images/map.svg";
import FilterByCategory from "../components/Filter/FilterByCategory"

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ""
    };
  }

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
              <div className="button filter-button" 
              onClick={() => this.props.handleToggleFilterButton()}
              >Filter By
              </div>
          </div>
          <div class="level-item">
            {this.props.toggleFilterButton ? <FilterByCategory categoryList={this.props.categoryList} /> : null}
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
            <div class="field">
              <p class="control">
                <input
                  class="input search-by-location"
                  type="text"
                  placeHolder="Austin, Texas"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </p>
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
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default FilterBar;
