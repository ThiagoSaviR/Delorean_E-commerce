import Card from "./card";
import { useCart } from "../contexts/cartContext";

const Section = ({ genre, products }) => {
  const cart = useCart();
  const add = (product) => () => {
    cart.addToCart(product);
  };

  return (
    <>
      <h3>{genre}</h3>
      <div className="section">
        {products?.map((product) => (
          <div className="a" key={product.id}>
            <a key={product.id} href={`/product/${product.slug}`}>
              <Card images={product.images[0].url} />
              <h2 className="price">R${product.price.toFixed(2)}</h2>
              <p className="price3x">
                ou 3 x de {(product.price / 3).toFixed(2)}
              </p>
            </a>
            <button className="button-add" onClick={add(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
