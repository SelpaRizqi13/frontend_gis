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
		  : d > 3206
          ? "#FD8D3C"
		  : d > 3207
          ? "#FD8D3C"
		  : d > 3208
          ? "#FD8D3C"
		  : d > 3209
          ? "#FD8D3C"
		  : d > 3210
          ? "#FD8D3C"
		  : d > 3211
          ? "#FD8D3C"
		  : d > 3212
          ? "#FD8D3C"
		  : d > 3213
          ? "#FD8D3C"
		  : d > 3214
          ? "#FD8D3C"
		  : d > 3215
          ? "#FD8D3C"
		  : d > 3216
          ? "#FD8D3C"
		  : d > 3217
          ? "#FD8D3C"
		  : d > 3218
          ? "#FD8D3C"
		  : d > 3219
          ? "#FD8D3C"
		    : d > 3220
          ? "#FD8D3C"
		  : d > 3221
          ? "#FD8D3C"
		  : d > 3222
          ? "#FD8D3C"
		  : d > 3223
          ? "#BD0026"
		  : d > 3224
      
          ? "#FD8D3C"
		  : d > 3225
          ? "#FD8D3C"
		  : d > 3226
          ? "#FD8D3C"
		  : d > 3227
          ? "#FD8D3C"
		  : d > 3228
          ? "#FD8D3C"
		  : d > 3229
          ? "#FD8D3C"
		  : d > 3230
          ? "#FD8D3C"
		  : d > 3231
          ? "#FD8D3C"
		  : d > 3232
          ? "#FD8D3C"
		  : d > 3233
          ? "#FD8D3C"
		  : d > 3234
          ? "#FD8D3C"
		  : d > 3235
          ? "#FD8D3C"
		  : d > 3236
          ? "#FD8D3C"
		  : d > 3237
          ? "#FD8D3C"
		  : d > 3238
          ? "#FD8D3C"
		  : d > 3239
          ? "#FD8D3C"
		  : d > 3240
          ? "#FD8D3C"
		  : d > 3241
          ? "#FD8D3C"
		  : d > 3242
          ? "#FD8D3C"
		  : d > 3243
          ? "#FD8D3C"
		  : d > 3244
          ? "#FD8D3C"
		  : d > 3245
          ? "#FD8D3C"
		  : d > 3246
          ? "#FD8D3C"
		  : d > 3247
          ? "#FD8D3C"
		  : d > 3248
          ? "#FD8D3C"
		  : d > 3249
          ? "#FD8D3C"
		  : d > 3250
          ? "#FD8D3C"
		  : d > 3251
          ? "#FD8D3C"
		  : d > 3252
          ? "#FD8D3C"
		  : d > 3253
          ? "#FD8D3C"
		  : d > 3254
          ? "#FD8D3C"
		  : d > 3255
          ? "#FD8D3C"
		  : d > 3256
          ? "#FD8D3C"
		  : d > 3257
          ? "#FD8D3C"
		  : d > 3258
          ? "#FD8D3C"
		  : d > 3259
          ? "#FD8D3C"
		  : d > 3260
          ? "#FD8D3C"
		  : d > 3261
          ? "#FD8D3C"
		  : d > 3262
          ? "#FD8D3C"
		  : d > 3263
          ? "#FD8D3C"
		  : d > 3264
          ? "#FD8D3C"
		  : d > 3265
          ? "#FD8D3C"
		  : d > 3266
          ? "#FD8D3C"
		  : d > 3267
          ? "#FD8D3C"
		  : d > 3268
          ? "#FD8D3C"
		  : d > 3270
          ? "#FD8D3C"
		  : d > 3271
          ? "#FD8D3C"
		  : d > 3272
          ? "#FD8D3C"
		  : d > 3273
          ? "#FD8D3C"
		  : d > 3274
          ? "#FD8D3C"
		  : d > 3275
          ? "#FD8D3C"
		  : d > 3276
          ? "#FD8D3C"
		  : d > 3277
          ? "#FD8D3C"
          : d > 3278 ? "#FEB24C" : d > 3279 ? "#FED976" : "#FFEDA0";
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
