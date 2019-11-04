import  React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker} from 'react-map-gl'
import Pin from '../images/pin.svg'
const GeoJSON = require('geojson')

const ProfileMap = (props) => {

    const [viewport, setViewport] = useState({props})

    const MAP_TOKEN = "pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw"

    useEffect(() => {
        if (Array.isArray(props.farmers)) {
            setViewport({
                latitude: 32.82531528692721,
                longitude: -100.53567794721157,
                width: "100%",
                height: "40vh",
                zoom: 3
            })
        }
        else {
            if (props.farmers.address){
                setViewport({
                    latitude: Number(props.farmers.address.latitude),
                    longitude: Number(props.farmers.address.longitude),
                    width: "100%",
                    height: "40vh",
                    zoom: 12
                })
            }
        }
    });

    const renderMarkers = () => {
        if (Array.isArray(props.farmers)) {
          return (
               props.farmers.map(farmer => (
                 farmer.address ? 
                    <Marker latitude={Number(farmer.address.latitude)} longitude={Number(farmer.address.longitude)}>
                        <img src={Pin} id="profile-map-pin" alt="location"/>
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
                </Marker> 
                : 
                null 
          )
        }
      }

    return (
        <div>
        <ReactMapGl 
            {...viewport}
            mapboxApiAccessToken = {MAP_TOKEN}
            onViewportChange = {viewport => {setViewport(viewport)}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
            {renderMarkers()}
        </ReactMapGl>
        </div>
    );
}

export default ProfileMap;