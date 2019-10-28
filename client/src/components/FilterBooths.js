import React from 'react'
import FilterButton from '../images/filterbutton.svg'


class FilterBooths extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  // handleSubmit = (event) => {
  //   this.props.handleFilterSubmit(this.state.value)
  //   event.preventDefault();
  // }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <nav class="level" id="filter">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>Filter By</strong>
            </p>
            <div class="filter-button"><img src={FilterButton}></img></div>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </p>
              <p class="control">
                <button onClick={() => this.props.handleFilterSubmit(this.state.value)}className="button">Search</button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default FilterBooths