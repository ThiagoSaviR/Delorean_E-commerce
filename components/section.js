import Card from "./card";

const Section = ({ genre, products }) => {
  return (
    <div className="section">
      <h3>{genre}</h3>
      <div className="product-feed">
          {products?.map(product => (
              <a key={product.id} href={`/product/${product.slug}`}>
                  <Card image={product.image}/>
              </a>
          ))}
      </div>
    </div>
 
  );
};

export default Section;
