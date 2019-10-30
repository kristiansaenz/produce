import React from 'react'

class BoothInfo extends React.Component {
  render() {
    return (
      <div class="column">
        <div class="booth-info">
          <div class="booth-title">
            <p class="title is-4">{this.props.name}</p>
          </div>
          <br />
          <br />
          <div class="booth-info-content">
            <p class="subtitle is-6">
              {this.props.description}
            </p>
          </div>
          <br />
          <br />
          <div class="booth-location">
            <p class="subtitle is-6">{this.props.city}, {this.props.state}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BoothInfo
