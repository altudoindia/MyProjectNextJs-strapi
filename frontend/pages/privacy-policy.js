import Head from 'next/head'
import { fetcher } from '../lib/api'
import Layout from "../components/PageStructure/Container/Layout";
import Title from '../components/Elements/Title';
import Description from '../components/Elements/Description';
import Container from '../components/PageStructure/Container/Container';
const PrivacyPolicy = ({ privacypolicy }) => {
  return (
    <Layout>
      <Head>
        <title>{privacypolicy.Title}</title>
      </Head>

      {/* Main Content */}
      <div className="mt-5 mb-5">
        <Container>
          <Title type="h1">{privacypolicy.Title}</Title>
          <Description>{privacypolicy.Description}</Description>
        </Container>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetcher(`privacy-policy?populate=*`);
  if (res.data) {
    return {
      props: {
        privacypolicy: res.data.attributes,
      },
    }
  } else {
    return {
      props: {
        privacypolicy: {}
      },
    }
  }
}

export default PrivacyPolicy;