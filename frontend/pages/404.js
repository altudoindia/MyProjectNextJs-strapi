// pages/404.js
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";

function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-6">
            <h1>404 - Page Not Found</h1>
            <Link href="/">
              <a>Go back Home</a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Custom404;
