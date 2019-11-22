import React from 'react';


function FarmerDescription(props) {
    return (
        <div class="farmer-description">
            
            <div className="info">
                <div className="subtitle"> Description </div>
                <p>{props.description}</p>
            </div>
            <br />
            <div className="hours">
                <div className="subtitle"> Hours </div>
                <p>Monday - Friday: 12pm - 3pm</p>
            </div>

        </div>
    )
}

export default FarmerDescription