import Head from "next/head";
import Layout from "../components/PageStructure/Container/Layout";
import { fetcher } from "../lib/api";
import LocationSidebar from "../components/Locations/LocationSidebar";
import LocationMap from "../components/Locations/LocationMap";
import ContainerFluid from "../components/PageStructure/Container/ContainerFluid";
import { useState, useEffect } from "react";

const OurLocation = ({ locationPage, locations }) => {
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const updateMapData = ( lat, long ) => {
    setLattitude(lat);
    setLongitude(long);
  }
  useEffect(() => {
    const location = locations[0];
    updateMapData(location.attributes.Lattitude,location.attributes.Longitude);
  }, [])

  return (
    <Layout>
      <Head>
        <title>{locationPage.Title}</title>
      </Head>
      <ContainerFluid>
        <div className="row">
        <LocationSidebar locations={locations} updateMapData={updateMapData} title={locationPage.SidebarTitle} />
        <LocationMap locations={locations}  lattitude={lattitude} longitude={longitude} />
        </div>
      </ContainerFluid>
    </Layout>
  );
};

export default OurLocation;

export async function getStaticProps() {
  const { data, error } = await fetcher(`our-location?populate=*`);
  const locations = await fetcher(`locations`);
  return {
    props: {
      locationPage: data.attributes,
      locations: locations.data
    },
  };
}
