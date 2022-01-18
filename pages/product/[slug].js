import { gql, GraphQLClient } from "graphql-request";
import { useCart } from "../../contexts/cartContext";

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
        images {
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


  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })



  const cart = useCart();
  const add = (product) => () => {
    cart.addToCart(product);
  };
  return (
    <div className="page">
      <h1>{product.title}</h1>
      <p>{product.tags.join(", ")}</p>
      <div className="product-page">
        <div className="product navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
      <img className="keen-slider__slide" src={product.images[0].url}/>
      <img className="keen-slider__slide" src={product.images[1].url}/>
    </div>

    {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}


        </div>

        {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
        

        <div className="product">
          <h2 className="price">R$ {product.price.toFixed(2)}</h2>
          <p className="price3x">
            Ou em 3x no cartão de R$ {(product.price / 3).toFixed(2)}
          </p>
          <button className="button-add" onClick={add(product)}>
            Adicionar ao carrinho
          </button>
          <div className="divider"></div>
          <div className="description">
            <h2>Descrição do produto:</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Product;
