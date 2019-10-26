import  React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw'

class Map extends Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-97.91153, 29.890661],
      zoom: 4
    });
  }

  render() {
    return(
      <div ref={el => this.mapContainer = el} />
    )
  }
}

export default Map;