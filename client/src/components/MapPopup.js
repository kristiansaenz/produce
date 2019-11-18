import React from 'react'
import { Link } from 'react-router-dom';

const MapPopup = (props) => {

  return(
    props.id ? (
      <Link to={`boothpage/${props.id}`}>{props.boothName}</Link> 
    ) : null
  )
}

export default MapPopup