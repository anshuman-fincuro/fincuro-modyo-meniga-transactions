import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY || '';

function Map({ latitude, longitude }) {
  const center = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

  if(GOOGLE_MAP_API_KEY){
    return (
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <GoogleMap
          zoom={20}
          center={center}
          mapContainerClassName="map__container"
        >
          <Marker position={center}></Marker>
        </GoogleMap>
      </LoadScript>
    );
  }
  return null
  
}
export default React.memo(Map);
