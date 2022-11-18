// pages/500.js
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";

const Custom500 = () => {
  return (
    <Layout>
      <Head>
        <title>500 - Server-side error occurred</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-6">
            <h1>500 - Server-side error occurred</h1>
            <Link href="/">
              <a>Go back Home</a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Custom500;
