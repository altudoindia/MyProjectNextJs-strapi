import Head from 'next/head'
import Image from '../components/Elements/Image'
import Layout from '../components/PageStructure/Container/Layout'
import Container from '../components/PageStructure/Container/Container'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
import HomeBanner from '../components/Media/HomeBanner/HomeBanner'
import Teams from '../components/Composits/Teams/Teams'

import { fetcher } from '../lib/api'
import React from 'react'
import InnerBanner from '../components/Media/InnerBanner/InnerBanner'
import StaffListing from "../components/PageContent/ThreeColumnTiles/ThreeColumnTiles";
const About = ({ props }) => {
  //console.log(props.teams)
  return (
    <Layout>
      <Head>
        {/* <title>{props.pageabout.Title}</title> */}
      </Head>
      {/* <InnerBanner content={props.pageabout.Banner} />
      <Teams content={props.pageabout.TeamMembers} /> */}
      {/* {pageabout.TeamMembers.Title} */}
      <StaffListing data={props.teams}/>
    </Layout>
  )
}

export default About;

export async function getStaticProps() {
  const responseAbout = await fetcher(`about?populate=*`);
  const res = await fetcher("articles?populate=*");
  return {
    props: {
      pageabout: responseAbout.data,
      teams: res.data
    }
  }
}