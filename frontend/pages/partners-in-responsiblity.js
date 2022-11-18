import Head from "next/head";
import Image from "next/image";
import Layout from "../components/PageStructure/Container/Layout";
import Container from "../components/PageStructure/Container/Container";
import { fetcher } from "../lib/api";
import React from "react";

const PartnersInpossibility = ({ Partnersinpossibility }) => {
  return (
    <Layout>
      <Head>
        <title>partnersinpossibility</title>
      </Head>
      <Container>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6"></div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                {" "}
                {Partnersinpossibility.Title}
              </h1>
              <p class="lead">{Partnersinpossibility.Banner.Subtitle}</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <p>{Partnersinpossibility.Banner.Description}</p>
          <div className="webinarListing">
            <ul class="list-group">
              <li class="list-group-item">
                <div className="webinarItem">
                  <img src="" />
                  <h4>{Partnersinpossibility.Webinar.PublishDate}</h4>
                  <p>{Partnersinpossibility.Webinar.Title}</p>
                  <p>{Partnersinpossibility.Webinar.StartTime}</p>
                  <p>{Partnersinpossibility.Webinar.EndTime}</p>
                  <p>{Partnersinpossibility.Webinar.Description}</p>
                  <p>{Partnersinpossibility.Webinar.Author}</p>
                  <p>{Partnersinpossibility.Webinar.LinkTitle}</p>
                </div>
              </li>
              <li class="list-group-item">
                <div className="webinarItem">
                  <img src="" />
                  <h4>{Partnersinpossibility.Webinar.PublishDate}</h4>
                  <p>{Partnersinpossibility.Webinar.Title}</p>
                  <p>{Partnersinpossibility.Webinar.StartTime}</p>
                  <p>{Partnersinpossibility.Webinar.EndTime}</p>
                  <p>{Partnersinpossibility.Webinar.Description}</p>
                  <p>{Partnersinpossibility.Webinar.Author}</p>
                  <p>{Partnersinpossibility.Webinar.LinkTitle}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Partnersinpossibility;

export async function getStaticProps() {
  const partnersinpossibilityResponse = await fetcher(
    `partners-in-possibility?populate=*`
  );
  return {
    props: {
      Partnersinpossibility: partnersinpossibilityResponse.data.attributes,
    },
  };
}