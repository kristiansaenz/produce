import  React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
const GeoJSON = require('geojson');

mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw'


class Map extends Component {
  map;

  constructor(props) {
    super(props);
    this.state = {
      lng: -95,
      lat: 37.5,
      zoom: 3.2,
      points: []
    };
  }

  componentDidMount() {

    let data = []
    this.props.farmers.map(farmer => (
      data.push({
        lat: farmer.address.latitude,
        lng: farmer.address.longitude
      })
    ))
    let newData = GeoJSON.parse(data, { Point: ['lat', 'lng'] });

    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('load', function () {
      map.addSource('trace', { type: 'geojson', data: newData });
      map.addLayer({
        "id": "booths",
        "type": "circle",
        "source": "trace",
        "paint": {
          "circle-radius": 5,
          "circle-color": "#B42222"
        },
        "filter": ["==", "$type", "Point"],
      });
    })
  
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    // const { lng, lat, zoom } = this.state;

    return (
      <div className="container is-map">
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
} 

export default Map;