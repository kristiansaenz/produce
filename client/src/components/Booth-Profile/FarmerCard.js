import React from 'react';
import Farmer from '../../images/farmer-card-pic.svg'
import { Rating } from 'semantic-ui-react'


function FarmerCard (props) {
        return (
            <div class="farmer-card">
                
                <div className="farmer-image">
                    <figure class="image is-1by1">
                        <img class="is-rounded" src={props.avatar}></img>
                    </figure>
                </div>

                {/* <div className="farmer-title"> */}
                    <div className="text is-size-4">{props.boothName}</div>
                    <button class="button is-success farmer-contact-button">Send Message</button>
                    <div className="text">{props.boothOwnerName}</div>
                {/* </div> */}

                <div className="booth-rating-profile">
                <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled/>
                </div>

                <div className="farmer-location">
                    <p>{props.city}, {props.state}</p>
                </div>
            </div>
        )
}

export default FarmerCard