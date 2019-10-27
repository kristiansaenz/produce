import React, { useState, useEffect } from 'react'
import Booth from '../components/Booth'
import axios from 'axios'

function BoothList(){

  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/farmers')
      setFarmers(result.data);
    };
    fetchData();
  }, []);

  return(
    <div>
      <div className="columns is-mobile">
      {farmers.map(farmer => (
          <Booth 
            id={farmer._id}
            name={farmer.name}
            email={farmer.email}
            booth_name={farmer.booth.booth_name}
            booth_description={farmer.booth.description}
            // city={farmer.address.city}
            // state={farmer.address.state}
          />
      ))}
      </div>
    </div>
  )
}

export default BoothList