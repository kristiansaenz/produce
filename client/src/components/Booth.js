import React from 'react'


class Booth extends React.Component {

    render() {
        return(
            <div class = "column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop">
                <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    {/* <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img> */}
                    <img src="https://cdn6.dissolve.com/p/D145_35_594/D145_35_594_1200.jpg" alt="Placeholder image"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    <div class="subtitle"> {this.props.name} </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    </p>
                    <br/>
                    {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                    <p>M W F from 12pm - 4pm</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

// Booth.propTypes = {
//     booth: propTypes.object.isRequired
// }

export default Booth