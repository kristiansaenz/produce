import React from 'react'
import Pacha from '../images/pachapacha.png'

class BoothImages extends React.Component {
    render() {
        return(
            <div class="column is-two-thirds">
                <div class="booth-images">
                    <figure class="image is-2by1">
                    <img src={Pacha} alt="Placeholder image"></img>
                    </figure>
                </div>
            </div>
        )
    }
}

export default BoothImages
