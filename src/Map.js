import React from "react";
import L from "leaflet";
import statesData from './data'
import './map.css'

const style = {
  width: "100vw",
  height: "100vh"
};

const mapStyle = (feature) => {
  return ({
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.ID_KAB)
  });
}

const getColor = (d) =>{
  return d > 3201
  ? "#800026"
  : d > 3202
    ? "#BD0026"
    : d > 3203
      ? "#E31A1C"
      : d > 3204
        ? "#FC4E2A"
        : d > 3205
          ? "#FD8D3C"
          : d > 20 ? "#FEB24C" : d > 10 ? "#FED976" : "#FFEDA0";
}

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [	-6.914744, 107.609810],
      zoom: 9,
      layers: [
        L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmxvcnZhbmRla2VyY2tob3ZlIiwiYSI6ImNqdGZyMmtrejAxYWw0M3A2OGtwdTMxNWEifQ.5U-KSDZfyKNC_Z74fEWj6g",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: "streets-v9"
        })
      ]
    });

    this.geojson = L.geoJson(statesData, {
      style: mapStyle,
      onEachFeature: this.onEachFeature
    }).addTo(this.map);

    this.info = L.control();

    this.info.onAdd = function(map) {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    this.info.update = function(props) {
      this._div.innerHTML =
        "<h4>Nama Daerah </h4>" +
        (props
          ? "<b>" +
            props.KABKOT +
            "</b><br />"
          : "Pilih Daerah");
    };

    this.info.addTo(this.map);

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
  }
  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.zoomToFeature
    });
  }
  highlightFeature = (e) => {
    var layer = e.target;
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7
    });

    layer.bringToFront();

    this.info.update(layer.feature.properties);
  }
  resetHighlight = (event) => {
    this.geojson.resetStyle(event.target);
    this.info.update();
  }
  zoomToFeature = (e) => {
    this.map.fitBounds(e.target.getBounds());
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
