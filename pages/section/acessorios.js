import Section from "../../components/section";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import acessorios from "../../public/acessórios.png";

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
        title
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

  const productsData = await graphQLClient.request(queryProducts);
  const products = productsData.products;

  return {
    props: {
      products,
    },
  };
}

const Acessorios = ({ products }) => {
  const filterProducts = (products, genre) => {
    return products.filter((product) => product.tags.includes(genre));
  };
  return (
      <div className="product-page">
          <Image src={acessorios} alt="bonner acessórios" />
          <Section products={filterProducts(products, "acessório")} />
      </div>
  )
};

export default Acessorios;