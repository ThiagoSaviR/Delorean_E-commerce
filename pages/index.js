import { gql, GraphQLClient } from "graphql-request";
import Section from "../components/section";
import NavBar from "../components/NavBar"
import Footer from "../components/footer";

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

  const queryBanners = gql`
    query {
      promotionalBanners {
        createdAt
        id
        title
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
  const filterProducts = (products, genre) => {
    return products.filter((product) => product.tags.includes(genre));
  };

  const randomPromotionalBanner = (banners) => {
    return banners[Math.floor(Math.random() * banners.length)];
  };

  return (
    <>
      <NavBar/>
      <div className="app">
        <div className="main-product">
          <img
            src={randomPromotionalBanner(banners).image.url}
            alt={randomPromotionalBanner(banners).title}
          />
        </div>
        <div className="promo-text">
          <h1>
            Em compras acima de R$ 99,99 você pode parcelar em 10x no cartão sem
            juros com frete GRÁTIS*
          </h1>
        </div>
        <div className="product-feed">
          <Section
            genre={"Novidades na loja"}
            products={filterProducts(products, "novidade")}
          />
          <Section genre={"Jogos"} products={filterProducts(products, "jogo")}/>
          <Section genre={"Consoles"} products={filterProducts(products, "console")} />
          <Section genre={"Acessórios"} products={filterProducts(products, "acessório")} />
        </div>
      </div>
    </>
  );
};

export default Home;
