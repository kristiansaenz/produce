import React from 'react';


function FarmerDescription(props) {
    return (
        <div class="farmer-description">
            
            <div className="info">
                <div className="subtitle"> Description </div>
                {/* <p>My family and I live on a small farm with 9000 m² of 
                    land with our goats and chickens. We cultivate fruit, 
                    vegetables, potatoes and herbs, and make cheese and other 
                    dairy products for our own use. Now we make our produce 
                    available to our local community.
                </p> */}
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