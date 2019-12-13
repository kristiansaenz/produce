import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterBar from './FilterBar'
import BoothList from './BoothList'
import debounce from 'lodash/debounce';
import ProfileMap from './ProfileMap'

const MarketContainer = () => {
  const [booths, setBooths] = useState([])
  const [mapStatus, setMapStatus] = useState(false);
  const [toggleFilterButtonExpanded, setToggleFilterButtonExpanded] = useState(false);
  const [categories, setCategories] = useState([
    {id: 1, name: "fruits"},
    {id: 2, name: "vegetables"},
    {id: 3, name: "dairy"},
    {id: 4, name: "bakery"}
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const booths = await axios.get('/booths')
      setBooths(booths.data);
    };
    fetchData();
  }, []);
  
  /* Functions that will be passed to children */

  const toggleFilterButtonExpand = () => {
    setToggleFilterButtonExpanded(!toggleFilterButtonExpanded)
  }

  const handleFilterSubmit = debounce((location) => {
    axios.get('/booths/filterByLocation', {
      params: {
        city: location
      }
    })
    .then(response => response.data)
    .then(data => {
      setBooths(data)
    })
  }, 400)

  const handleMapClick = () => {
    setMapStatus(!mapStatus)
  }

  const renderMap = () => {
    if (mapStatus) {
      return (
        <div className="container is-map">
          <ProfileMap booths={booths} />
        </div>
      )
    }
    else {
      return (<div />)
    }
  }

    return(
      <div>
        <FilterBar
          toggleFilterButton={toggleFilterButtonExpanded}
          handleToggleFilterButton={toggleFilterButtonExpand}
          categoryList={categories}
          handleMapClick={handleMapClick} 
          handleFilterSubmit={handleFilterSubmit}
        />

        {/* Render map if clicked */}
        {renderMap()}

        <BoothList booths={booths}/>
      </div>
    );
}

export default MarketContainer;