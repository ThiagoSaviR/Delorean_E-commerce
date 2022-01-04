import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    Headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const queryProducts = gql`
    query {
      products {
        createdAt
        id
        tilte
        description
        price
        slug
        tags
        image {
          url
        }
      }
    }
  `;

  const queryBanners = gql`
    query {
      promotionalBanners {
        createdAt
        id
        tilte
        description
        image {
          url
        }
      }
    }
  `;

  const productsData = await graphQLClient.request(queryProducts);
  const products = productsData.products;

  const bannersData = await graphQLClient.request(queryBanners);
  const banners = bannersData.promotionalBanners;

  return {
    props: {
      products,
      banners,
    },
  };
};

const Home = ({ products, banners }) => {
  console.log(banners);
  return <div></div>;
};

export default Home;
