import  React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
//import ReactMapGl, { Marker, Layer } from 'react-map-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbmphbHVma2EiLCJhIjoiY2syNzBpZzl1MzdxNDNjbXQ0MDl0eTBwMyJ9.G7XyRwnaQnkWNFjDDx7QZw'


class Map extends Component {
  map;

  constructor(props) {
    super(props);
    this.state = {
      lng: -95,
      lat: 37.5,
      zoom: 3.2
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('load', function () {
      map.addSource("national-park", {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [ {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-97.59435, 27.846568 ]
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-121.505184, 40.488084]
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-121.354465, 40.488737]
            }
          }]
        }
      });


      map.addLayer({
        "id": "park-volcanoes",
        "type": "circle",
        "source": "national-park",
        "paint": {
        "circle-radius": 5,
        "circle-color": "#B42222"
        },
        "filter": ["==", "$type", "Point"],
        });
    });

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
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
} 

export default Map;