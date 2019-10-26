import React, { useState, useEffect } from 'react'
import Booth from '../components/Booth'
//import FilterBooths from '../components/FilterBooths'
import axios from 'axios'
import Map from './Map'

function BoothList(){

  const [farmers, setFarmers] = useState([]);
  const [mapStatus, setMapStatus] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/farmers')
      setFarmers(result.data);
    };
    fetchData();
  }, []);

  const handleMapClick = () => {
    console.log(!mapStatus)
    setMapStatus(!mapStatus)
  }

  if(mapStatus === true) {
    return(
      <div>
        <button onClick={() => handleMapClick()}>List View</button>
        <Map />
      </div>
    )
  } else {
    return(
      <div>
        <button onClick={() => handleMapClick()}>Map View</button>
        <div className="columns is-mobile">
        {farmers.map(farmer => (
          <Booth 
            id={farmer._id}
            name={farmer.name}
            email={farmer.email}
          />
        ))}
        </div>
      </div>
    )
  }
}

export default BoothList