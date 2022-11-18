import Head from "next/head";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import { fetcher } from "../lib/api";

const News = (props) => {
  console.log(props);
  return (
    <>
      <Layout>
        <Head>
          <title>{props.category_data.data.attributes.Title}</title>
        </Head>
        <Container>

          <div className="rich-text mt-5 mb-5">
            <h1>{props.category_data.data.attributes.Title}</h1>
            <p>{props.category_data.data.attributes.Description}</p>
          </div>

          <div className="article-list row">
            {props.article_data.map((item) => {
              return (
                <div key={item.id} className="item col-lg-4 mb-4">
                  <div className="thumbnail card">
                    <div className="img-event">
                      <img
                        className="group list-group-image img-fluid"
                        src={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
                      />
                    </div>
                    <div className="caption card-body">
                      <h4 className="group card-title inner list-group-item-heading">
                        {item.attributes.Title}
                      </h4>
                      <p className="group inner list-group-item-text">
                        {item.attributes.Description}
                      </p>
                      <div className="row">
                        <div className="col-xs-12 col-md-6">
                          <p className="lead">{item.attributes.Date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="article-category mb-4">
              <h3 className="article-title">
                {props.category_data.data.attributes.CategoryListing.Title}
              </h3>
              <ul>
                <li>News</li>
                <li>Pet Safety</li>
                <li>Stories</li>
                <li>Uncategorized</li>
              </ul>
            </div>

          </div>
        </Container>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  let { data } = await fetcher("articles?populate=*");
  let category_data = await fetcher("news-and-storie?populate=*");
  return {
    props: {
      article_data: data,
      category_data: category_data,
    },
  };
}

export default News;
