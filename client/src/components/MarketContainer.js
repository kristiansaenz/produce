import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterBooths from './FilterBooths'
import Map from './Map'
import BoothList from './BoothList'
import debounce from 'lodash/debounce';

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

  const handleFilterSubmit = debounce((location) => {
    axios.get('/farmers/filter', {
      params: {
        city: location
      }
    })
    .then(response => response.data)
    .then(data => {
      setFarmers(data)
    })
  }, 400)

  const handleMapClick = () => {
    setMapStatus(!mapStatus)
  }

  const renderMap = () => {
    if (mapStatus) {
      return (
        <Map farmers={farmers} />
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
  // -----------------------------------------------
    return(
      <div>
        <FilterBooths handleMapClick={handleMapClick} handleFilterSubmit={handleFilterSubmit}/>

        {/* Render map if clicked */}
        {renderMap()}

        <BoothList farmers={farmers}/>
      </div>
    );
}

export default MarketContainer;