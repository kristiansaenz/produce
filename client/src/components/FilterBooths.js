import React, { useState, useEffect } from 'react'
import FilterButton from '../images/filterbutton.svg'
import MapIcon from '../images/map.svg'
import axios from 'axios'
import Map from './Map'
import BoothList from './BoothList'


function FilterBooths() {

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

    const renderMap = () => {
        if(mapStatus) {
          return (
              <Map farmers={farmers} />
          )}
          else {
            return (
                <div></div>
            )
        
      }
    }

    return(
        <div>
        <nav class="level" id="filter">
            <div class="level-left">

                {/* Filter Button */}
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>Filter By</strong>
                    </p>
                    <div class="filter-button"><img src={FilterButton}></img></div>
                </div>
            </div>
            
            <div class="level-right">

                {/* Map Button */}
                <div class="level-item">
                    <img src={MapIcon} id="map" onClick={() => handleMapClick()}></img>
                </div>

                {/* Location field + Search button */}
                <div class="level-item">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Location"></input>
                        </p>
                        <p class="control">
                            <button class="button">Search</button>
                        </p>
                    </div>
                </div>
            </div>
        </nav>

        {/* Render map if clicked */}
        {renderMap()}

        <div class="container">
                <BoothList farmers={farmers}/>
        </div>
        
        </div>
    )
}

export default FilterBooths