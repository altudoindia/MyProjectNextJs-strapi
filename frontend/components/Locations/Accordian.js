import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobe, faLocation } from "@fortawesome/free-solid-svg-icons";
import Title from "../Elements/Title";
import Styles from "./accordian.module.scss";

function Accordian({ Item, id, updateMapData }) {

  return (
    <>
      <div
        className="accordion-item"
        data-lat={Item.Lattitude}
        data-long={Item.Longitude}
      >
        <Title type="h2" className="accordion-header" id={"heading-" + id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-" + id}
            aria-expanded="false"
            aria-controls={"flush-" + id}
            onClick={() => updateMapData(Item.Lattitude, Item.Longitude)}
          >
            <strong> {Item.LocationName} </strong>
            <span className="city-state small px-4">{Item.LocationCity}</span>
          </button>
        </Title>
        <div
          id={"flush-" + id}
          className="accordion-collapse collapse"
          aria-labelledby={"heading-" + id}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body row">
            <div className="col-12 col-md-7 small">
              <div className="finder-address">
                <FontAwesomeIcon className="icon" icon={faLocation} />
                <span className="pl-2"> {Item.Address} </span>
              </div>
              {Item.Phone ? (
                <div className="finder-phone ">
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  <span className="pl-2">{Item.Phone}</span>
                </div>
              ) : null}
              <div className="finder-link relative">
                {Item.Link ? (
                  <>
                    <FontAwesomeIcon className="icon" icon={faGlobe} />
                    <a href={Item.Link} target="_blank" className="">
                      {Item.Link}
                    </a>
                  </>
                ) : null}
              </div>
            </div>
            {Item.Logo ? (
              <div className="col-12 col-md-5 d-flex justify-content-lg-center justify-content-md-start align-items-center flex-wrap flex-row">
                <div className="finder-logo">
                  <img
                    src={Item.Logo}
                    alt={Item.HospitalName}
                    className={Styles.logo}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
