import React from 'react'
import { Link } from 'react-router-dom'

class Booth extends React.Component {

    render() {
        return(
            <div class = "column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop">
                <Link to={`boothpage/${this.props.id}`}>
                <div class="card is-equal-height">

                    {/* Card Image */}
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://cdn6.dissolve.com/p/D145_35_594/D145_35_594_1200.jpg" alt="Placeholder image"></img>
                        </figure>
                    </div>

                    {/* Card Content */}
                    <div class="card-content">
                        <div class="content">
                            <div class="subtitle"> {this.props.name} </div>
                            <p> {this.props.booth_description} </p>
                        </div>
                    </div>

                    {/* Card Footer */}
                    <footer class="card-footer">
                        <div class="card-footer-item">Corpus Christi</div>
                    </footer>
                </div>
                </Link>
            </div>
        )
    }
}

export default Booth