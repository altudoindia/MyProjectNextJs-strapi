import React from "react";
import { useState } from "react";
import markerLogo from "../../public/place-marker-16.png"
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
  InfoBox,
  useJsApiLoader
} from "@react-google-maps/api";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function LocationMap({ locations, lattitude, longitude }) {
  const markers = [];
  locations.map((location, index) =>
    markers.push({
      id: location.id,
      name: location.attributes.HospitalCity,
      position: {
        lat: parseFloat(location.attributes.Lattitude),
        lng: parseFloat(location.attributes.Longitude),
      },
    })
  );
  
  const center = {
    lat: parseFloat(lattitude),
    lng: parseFloat(longitude),
  };
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`,
    libraries: ['geometry', 'drawing'],
  });


  return (
    <>
      <div className="col-lg-8 col-12 px-0">
          {isLoaded &&
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            // onLoad={handleOnLoad}
            // onClick={() => setActiveMarker(null)}
            // mapContainerStyle={{ width: "100vw", height: "100vh" }}
          >
            {/* Child components, such as markers, info windows, etc. */}

            
            <Marker
                position={center}
                icon={markerLogo.src}
                label="Location"
                // onClick={() => handleActiveMarker(id)}
              >
                 
              </Marker>
          </GoogleMap> 
          }
      </div>
    </>
  );
}

export default LocationMap;

const containerStyle = {
  width: "100%",
  height: "100vh",
};
