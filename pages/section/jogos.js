import Section from "../../components/section";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import jogos from "../../public/jogos.png"

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

const Consoles = ({ products }) => {
  const filterProducts = (products, genre) => {
    return products.filter((product) => product.tags.includes(genre));
  };
  return (
      <div className="product-page">
          <Image src={jogos} alt="Banner jogos"/>
          <Section products={filterProducts(products, "jogo")} />
      </div>
  )
};

export default Consoles;