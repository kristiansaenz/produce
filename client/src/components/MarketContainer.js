import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterBooths from './FilterBooths'
import Map from './Map'
import BoothList from './BoothList'

const MarketContainer = () => {

  const [farmers, setFarmers] = useState([]);
  const [mapStatus, setMapStatus] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/farmers')
      setFarmers(result.data);
    };
    fetchData();
  }, []);

  // functions which will be passed to children here
  // -----------------------------------------------

  const handleFilterSubmit = (location) => {
    axios.get('/farmers/filter', {
      params: {
        city: location
      }
    })
    .then(response => response.data)
    .then(data => {
      setFarmers(data)
    })
  }

  // -----------------------------------------------

    return(
      <div>
        <FilterBooths handleFilterSubmit={handleFilterSubmit}/>
        <Map farmers={farmers}/>
        <BoothList farmers={farmers}/>
      </div>
    );
}

export default MarketContainer;