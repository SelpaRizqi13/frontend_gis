import React from "react";
import L from "leaflet";
import statesData from './data'
import './map.css'
import budaya from './image/budaya.jpg'


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
  return d === 3201
  ? "#80002"
  : d === 3202
    ? "#BD0026"
    : d === 3203
      ? "#E31A1C" 
      : d === 3204
        ? "#FC4E2A"
        : d === 3205
          ? "#d3fc03"
		  : d === 3206
          ? "#45fc03"
		  : d === 3207
          ? "#03fcfc"
		  : d === 3208
          ? "#03c6fc"
		  : d === 3209
          ? "#038cfc"
		  : d === 3210
          ? "#035efc"
		  : d === 3211
          ? "#031cfc"
		  : d === 3212
          ? "#6203fc"
		  : d === 3213
          ? "#8403fc"
		  : d === 3214
          ? "#a903fc"
		  : d === 3215
          ? "#fc03ce"
		  : d === 3216
          ? "#fc0390"
		  : d === 3217
          ? "#fc034a"
		  : d === 3218
          ? "#fc0331"
		  : d === 3271
          ? "#fc6703"
		  : d === 3272
          ? "#c7735a"
		  : d === 3273
          ? "#c79a5a"
		  : d === 3274
          ? "#c7af5a"
		  : d === 3275
          ? "#9bc75a"
		  : d === 3276
          ? "#5ac787"
		  : d === 3277
          ? "#5ab7c7"
          : d === 3278 ? "#FEB24C" : d === 3279 ? "#FED976" : "#FFEDA0";
}

class Map extends React.Component {
  state ={
    loading : true,
    person : null,
  };
  
  async componentDidMount() {
    const url = "http://127.0.0.1:8000/api/getDaerah";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    const urlUnsur = "http://127.0.0.1:8000/api/getUnsur";
    const responseUnsur = await fetch(urlUnsur);
    const dataUnsur = await responseUnsur.json();
    console.log(dataUnsur.data);


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

    data.data.map(d=> L.marker([d.latitude, d.longitude]).addTo(this.map)
    .bindPopup(`<h1>8 Unsur Budaya</h1><img src=${budaya} width=100% height=100> </img></br>${dataUnsur.data.map(unsur =>`<a href='/unsur/${unsur.id}'> ${unsur.id}. ${unsur.name_element}</a></br>`).join("")}`));

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
    var {items} = this.state;
    return (
    <div id="map" style={style}> 
    {
      this.state.loading || !this.state.person ? (
        <div>
          loading ...
        </div>
      ) :
      (
        <div> 
          <div>
            {this.state.person.name_area}
          </div>
        </div>
      )
    }
    </div>
    );
  }
}

export default Map;
