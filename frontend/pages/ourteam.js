import React from "react";
import Head from 'next/head'
import Title from '../components/Elements/Title'
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import Section from '../components/PageStructure/Container/Section'
import StaffListing from "../components/PageContent/ThreeColumnTiles/ThreeColumnTiles";

import { fetcher } from "../lib/api";
  const outteam = (props) => {
   
    return (
      <Layout>
        <Head>
          <title>Meat the Team</title>
        </Head>
        
     <Section>
        <Container>
          <Title type="h2" className="text-center text-uppercase mt-5">meet our ourteam</Title>
          <StaffListing data={props.teams}/>
        </Container>
     </Section>

      </Layout>
    )
  }
  
  export default outteam;
  export async function getServerSideProps(context) {
    const res = await fetcher("articles?populate=*");
    return {
      props: {
        teams: res.data
      },
    };
  }