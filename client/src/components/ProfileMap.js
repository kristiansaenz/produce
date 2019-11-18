import  React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import MapPopup from './MapPopup'
import Pin from '../images/map-pin.svg'
const GeoJSON = require('geojson')

const ProfileMap = (props) => {

    const [viewport, setViewport] = useState({props})
    let [popupVisible, setPopupVisible] = useState(false)
    let [active, setActive] = useState(null)

    const MAP_TOKEN = "pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw"

    useEffect(() => {
        if (Array.isArray(props.farmers) && props.farmers.length > 0) {
            let latSum = 0
            let lngSum = 0
            let zoom = 3

            props.farmers.map(c => {
              latSum += Number(c.address.latitude)
              lngSum += Number(c.address.longitude)
            })
            let latAvg = latSum / props.farmers.length
            let lngAvg = lngSum / props.farmers.length
            console.log(latAvg, lngAvg)
            if(props.farmers.length < 5) { 
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
            if (props.farmers.address){
                setViewport({
                    latitude: Number(props.farmers.address.latitude),
                    longitude: Number(props.farmers.address.longitude),
                    width: "100%",
                    height: "40vh",
                    zoom: 13
                })
            }
        }
    }, [props.farmers]);

    const renderMarkers = () => {
        if (Array.isArray(props.farmers)) {
          return (
               props.farmers.map(farmer => (
                 farmer.address ? 
                    <Marker 
                      latitude={Number(farmer.address.latitude)}
                      longitude={Number(farmer.address.longitude)}
                    >
                      <div onClick={() => {setPopupVisible(true); setActive(farmer)}} class="map-marker"></div>
                    </Marker>
                    : 
                    null
            ))
          )
        }
        else {
          return (
            props.farmers.address ? 
                <Marker latitude={Number(props.farmers.address.latitude)} longitude={Number(props.farmers.address.longitude)}>
                    <img src={Pin} id="profile-map-pin" alt="location"/>
                    {/* <div class="map-marker"></div> */}
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
                  boothName={active.booth.booth_name}
                  visible={true}
                />
              </Popup>
          )
      }
    }

    return (
        <div class="map-container">
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={MAP_TOKEN}
          onViewportChange={viewport => { setViewport(viewport) }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {renderMarkers()}
          {renderPopups()}
        </ReactMapGl>
        </div>
    );
}

export default ProfileMap;