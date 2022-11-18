import Head from 'next/head'
import Image from '../components/Elements/Image'
import Layout from '../components/PageStructure/Container/Layout'
import Container from '../components/PageStructure/Container/Container'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
import HomeBanner from '../components/Media/HomeBanner/HomeBanner'

import { fetcher } from '../lib/api'
import React from 'react'

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Head>
        <title>{homepage.Title}</title>
      </Head>
      <HomeBanner bannerdata={homepage.Banner} />
      <ContentTile content={homepage.ContentTile} />
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {
  const homeResponse = await fetcher(`home?populate[0]=BackgroundImage&populate[1]=Banner.Image&populate[2]=ContentTile`);
  return {
    props: {
      homepage: homeResponse.data.attributes
    }
  }
}