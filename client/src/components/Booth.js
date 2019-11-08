import React from 'react'
import { Link } from 'react-router-dom'
import PinIcon from '../images/pin.svg'
import { Rating } from 'semantic-ui-react'


class Booth extends React.Component {

  render() {
    return (
      <div class="column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop">
        <Link to={`boothpage/${this.props.id}`}>
          <div class="card is-equal-height">

            {/* Card Image */}
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={this.props.booth_images} alt="Farmer"></img>
              </figure>
            </div>

            {/* Card Content */}
            <div class="card-content">
              <div class="content">
                <div class="subtitle"> {this.props.booth_name} </div>
                <p> {this.props.booth_description} </p>
                {/* <div className="farmer-rating">
                  <Rating icon='star' defaultRating={5} maxRating={5} disabled/>
                </div> */}
              </div>
            </div>

             {/* Card Footer */}
             <footer class="card-footer">
               <div class="card-footer-item"><img src={PinIcon} className="pin" />{this.props.address.city}, {this.props.address.state}</div>
             </footer>
                </div>
             </Link>

            </div>

    )
  }
}

export default Booth