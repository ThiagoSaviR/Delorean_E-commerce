import { gql, GraphQLClient } from "graphql-request";
import Button from "../../components/button";
import { useCart } from "../../contexts/cartContext";

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
  const cart = useCart()
  const add = product => () => {
    cart.addToCart(product)
  }
  return (
    <div className="product-page">
      <div className="product">
        <h1>{product.title}</h1>
        <p>{product.tags.join(", ")}</p>
        <img src={product.image.url} />
      </div>
      <div className="product">
        <h2 className="price">R$ {product.price.toFixed(2)}</h2>
        <p className="price3x">Ou em 3x no cartão de R$ {(product.price / 3).toFixed(2)}</p>
        <button className="button-add" onClick={add(product)}>Adicionar ao carrinho</button>
        <div className="divider"></div>
        <div className="description">
        <h2>Descrição do produto:</h2>
        <p>{product.description}</p>
      </div>

        </div>
      
    </div>
  );
};

export default Product;
