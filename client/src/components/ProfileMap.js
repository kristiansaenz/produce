import  React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import MapPopup from './MapPopup'
import Geocoder from 'react-mapbox-gl-geocoder'
import Pin from '../images/map-pin.svg'
const GeoJSON = require('geojson')


const ProfileMap = (props) => {

    const [viewport, setViewport] = useState({props})
    let [popupVisible, setPopupVisible] = useState(false)
    let [active, setActive] = useState(null)

    //const MAP_TOKEN = "pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw"
    const mapAccess = {
      mapboxApiAccessToken: "pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw"
  }
  const queryParams = {
    country: 'us',
    types: 'place'
  }

    useEffect(() => {
      if (Array.isArray(props.booths) && props.booths.length > 0) {
        let latSum = 0
        let lngSum = 0
        let zoom = 3

        props.booths.map(c => {
          latSum += Number(c.address.latitude)
          lngSum += Number(c.address.longitude)
        })
        let latAvg = latSum / props.booths.length
        let lngAvg = lngSum / props.booths.length
        console.log(latAvg, lngAvg)
        if(props.booths.length < 5) { 
          zoom = 4
        }

        setViewport({
          latitude: latAvg,
          longitude: lngAvg,
          width: "100%",
          height: "40vh",
          zoom: zoom
        })
      }
        else {
          if (props.booths.address){
            setViewport({
              latitude: Number(props.booths.address.latitude),
              longitude: Number(props.booths.address.longitude),
              width: "100%",
              height: "40vh",
              zoom: 10
            })
          }
        }
    }, [props.booths]);

    const renderMarkers = () => {
      if (Array.isArray(props.booths)) {
        return (
          props.booths.map(booth => (
            booth.address ? 
            <Marker 
              latitude={Number(booth.address.latitude)}
              longitude={Number(booth.address.longitude)}
            >
              <div onClick={() => {setPopupVisible(true); setActive(booth)}} class="map-marker"></div>
            </Marker>
            : 
            null
          ))
        )
      } else {
          return (
            props.booths.address ? 
              <Marker latitude={Number(props.booths.address.latitude)} longitude={Number(props.booths.address.longitude)}>
                  <img src={Pin} id="profile-map-pin" alt="location"/>
              </Marker> 
              : 
              null 
          )
        }
      }

    const renderPopups = () => {
      if (popupVisible) {
        return (
              <Popup 
                latitude={Number(active.address.latitude)}
                longitude={Number(active.address.longitude)}
                closeOnClick={false}
                onClose={() => setPopupVisible(false)}
                >
                <MapPopup 
                  id={active._id}
                  boothName={active.booth_name}
                  visible={true}
                />
              </Popup>
          )
      }
    }

    const onSelected = (viewport, item) => {
      setViewport(viewport)
      console.log('Selected: ', item)
    }

    return (
        <div class="map-container">
        {Array.isArray(props.booths)&&
          <Geocoder
            {...mapAccess} onSelected={onSelected} viewport={viewport} hideOnSelect={true}
            queryParams={queryParams}
          />
        }
        <ReactMapGl
          {...mapAccess} {...viewport}
          onViewportChange={(newViewport) => setViewport(newViewport)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {renderMarkers()}
          {renderPopups()}
        </ReactMapGl>
        </div>
    );
}

export default ProfileMap;