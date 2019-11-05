import React from 'react'
import Booth from '../components/Booth'
// import axios from 'axios'
// import Map from './Map'

function BoothList(props){

  if (props.farmers.length === 0) {
    return (
      <div>
        <h1>Hmm... There aren't any booths here :(</h1>
      </div>
    )
  } else {
    return (
      <div>
        <div className="columns is-mobile booth-list">

          {props.farmers.map(farmer => (
            <Booth
              id={farmer._id}
              name={farmer.name}
              email={farmer.email}
              address={farmer.address}
              booth_name={farmer.booth.booth_name}
              booth_description={farmer.booth.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default BoothList