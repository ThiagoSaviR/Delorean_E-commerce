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
            </a>
            <Button />
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
