import React from 'react';
import Farmer from '../../images/farmer-card-pic.svg'


function FarmerCard() {
    return (
        <div class="farmer-card">
            
            <div className="farmer-image">
                {/* <figure className="image is-4by5"> */}
                    <img src={Farmer}></img>  
                {/* </figure>  */}
            </div>

            <div className="farmer-title">
                <div className="subtitle"> Aryun's Magical Veggies </div>
                <div className="subtitle"> Aryun Juflaka </div>
            </div>

            <div className="farmer-rating">
                <p><i>[insert five stars here]</i></p>
            </div>

            <div className="farmer-location">
                <p> Mumbai, India </p>
            </div>
        </div>
    )
}

export default FarmerCard