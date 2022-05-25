import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconLocation} from './IconLocation';
import logo from '../imagenes/logo.svg'

const Markers = (props) => {
    const { places } = props;
    const markers = places.map((place, i) => (
        <Marker
            key={i}
            position={place.geometry}
            icon={IconLocation}>
            <Popup>
              <img src={logo} alt='imagen de terreno'/>
              <h3>{place.name}</h3>
              Area: {place.area}m2 <br/>
              Contacto: {place.contacto}<br/>
              Precio: ${place.precio}

            </Popup>
        </Marker>
    ));
    return markers;
};

export default Markers;
