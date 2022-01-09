import Button from "./button";
import Card from "./card";

const Section = ({ genre, products }) => {
  return (
    <>
      <h3>{genre}</h3>
      <div className="section">
        {products?.map((product) => (
          <div className="a" key={product.id}>
            <a key={product.id} href={`/product/${product.slug}`}>
              <Card image={product.image} />
              <h2 className="price">R${product.price.toFixed(2)}</h2>
              <p className="price3x">ou 3 x de {(product.price / 3).toFixed(2)}</p>
            </a>
            <Button />
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
