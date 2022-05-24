import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconLocation} from './IconLocation';

const Markers = (props) => {
    const { places } = props;
    const markers = places.map((place, i) => (
        <Marker
            key={i}
            position={place.geometry}
            icon={IconLocation}>
            <Popup>
              <img src='https://cloudinary-res.cloudinary.com/image/upload/c_scale,dpr_2.0,q_auto,w_156/cloudinary_logo_for_white_bg.svg'/>
              Area: {place.area}m2 <br/>
              Contacto: {place.contacto}<br/>
              Precio: ${place.precio}

            </Popup>
        </Marker>
    ));
    return markers;
};

export default Markers;
