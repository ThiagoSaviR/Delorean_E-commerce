import Image from "next/image";
import carrinho from "../../public/carrinho.png";
import { useCart } from "../../contexts/cartContext";

const Carrinho = () => {
  const { cart } = useCart();
  console.log(cart);
  let sumall = 0;
  return (
    <div className="product-page">
      <div className="cartBanner">
        <Image src={carrinho} alt="Banner carrinho" />
      </div>
      {cart.map((item) => {
        sumall = cart
          .map((item) => item.price)
          .reduce((prev, curr) => prev + curr, 0);
        return (
          <div key={item.id} className="description-item">
            <div className="image-item">
              <img src={item.image.url} />
            </div>
            <div className="title-item">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
            <div className="price-item">
              <p>R$ {item.price.toFixed(2)}</p>
              <button>Excluir</button>
            </div>
          </div>
        );
      })}
      <div className="total">
        <h2>Total:</h2>
        <h2 className="total-price">R$ {sumall.toFixed(2)}</h2>
      </div>
      <div className="buy-button">
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Carrinho;
