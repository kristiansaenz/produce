import React from 'react';
import Farmer from '../../images/farmer-card-pic.svg'
import { Rating } from 'semantic-ui-react'


function FarmerCard (props) {
        return (
            <div class="farmer-card">
                
                <div className="farmer-image">
                    {/* <figure className="image is-4by5"> */}
                        <img src={Farmer} id="profile-pic"></img>  
                    {/* </figure>  */}
                </div>

                <div className="farmer-title">
                    <div className="subtitle">{props.name}</div>
                    <div className="subtitle">{props.farmerName}</div>
                </div>

                <div className="farmer-rating">
                  <Rating icon='star' defaultRating={5} maxRating={5} disabled/>
                </div>

                <div className="farmer-location">
                    <p>{props.city}, {props.state}</p>
                </div>
            </div>
        )
}

export default FarmerCard