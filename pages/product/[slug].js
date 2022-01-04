import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    Headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      product(where: { slug: $pageSlug }) {
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

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const product = data.product;

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }) => {
  console.log(product);
  return <div></div>;
};

export default Product;
