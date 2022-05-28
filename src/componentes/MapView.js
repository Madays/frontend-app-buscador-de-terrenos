import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/MapView.css";
import Markers from "./Markers";
import NotFound from "./NotFound"
//import  places  from '../assets/data.json';

const MapView = () => {
  const [state, setState] = useState({
    currentLocation: { lat: "-12.866194544722239", lng: "-72.6940012478429" },
    zoom: 7,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [places, setPlaces] = useState([]);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const areaFrom = parseInt(searchParams.get("area"), 10) - 20;
    const areaTo = parseInt(searchParams.get("area"), 10) + 20;
    const filterPlace = searchParams.get("place").toUpperCase();

    axios.get(`https://busca-terrenos.herokuapp.com/api/terrenos`).then((res) => {
      const terrenos = res.data;
      const terrenosFiltrados = terrenos.filter(
        (t) =>
          t.name.toUpperCase().includes(filterPlace) &&
          (areaFrom < t.area ) && (t.area < areaTo)
      )
      setPlaces(terrenosFiltrados);
      if(terrenosFiltrados.length===0){
        setNotFound(true)
      }
    });
  }, []);

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {notFound?<NotFound />:null}

      <Markers places={places} />

    </MapContainer>
  );
};

export default MapView;
