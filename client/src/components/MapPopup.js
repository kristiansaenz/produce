import React from 'react'
import { Link } from 'react-router-dom';

const MapPopup = (props) => {

  const image = "http://ecotalk.org/wp-content/uploads/2015/04/elite-vegetable-gardening-vegetable-garden.jpg"

  return(
    props.id ? (
      <Link to={`booth/${props.id}`}>
        <div className="map-popup">
          <img src={image} alt="booth display"/>
          <br />
          {props.booth.booth_name} 
        </div>
      </Link>
    ) : null
  )
}

export default MapPopup