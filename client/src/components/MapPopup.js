import React from 'react'
import { Link } from 'react-router-dom';

const MapPopup = (props) => {

  return(
    props.id ? (
      <Link to={`booth/${props.id}`}>{props.booth.booth_name}</Link> 
    ) : null
  )
}

export default MapPopup