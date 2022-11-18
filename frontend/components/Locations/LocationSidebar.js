import React from "react";
import Title from "../Elements/Title";
import Accordian from "./Accordian";

function LocationSidebar({ locations, updateMapData, title }) {
  
  return (
    <div className="col-12 col-lg-4 pt-8 bg-info" >
      <Title
        type="h2"
        className="h3 text-center mb-3 font-weight-bold txt-atoll"
      >
        {title}
      </Title>
      {/* <pre> {JSON.stringify(locations)} </pre> */}
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {locations.length ?
          locations.map((location) => (
            <Accordian
              key={location.id}
              Item={location.attributes}
              id={location.id}
              updateMapData={updateMapData}
            ></Accordian>
          )):
          null 
          }
      </div>
    </div>
  );
}

export default LocationSidebar;
