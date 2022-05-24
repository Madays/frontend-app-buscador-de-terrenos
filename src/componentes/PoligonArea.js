import React from "react";
import { Rectangle } from "react-leaflet";

const redOptions = { color: 'red' }
const PoligonArea = (props) => {
    const { places } = props;
    const poligons = places.map((place, i) => (
      <Rectangle
        key={i}
        bounds={place.poligonArea}
        pathOptions={redOptions} />
    ));
    return poligons;
};

export default PoligonArea;
