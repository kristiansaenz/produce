import React from 'react'

class BoothImages extends React.Component {
    render() {
        return(
            <div class="booth-images">
                <figure class="image is-2by1">
                <img src={this.props.booth_images} alt="Placeholder"></img>
                </figure>
            </div>
        )
    }
}

export default BoothImages
