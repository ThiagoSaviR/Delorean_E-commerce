import Image from "next/image";
import carrinho from "../../public/carrinho.png" 

const Carrinho = () => {
  return (
      <div className="product-page">
          <div>
          <Image src={carrinho} alt="Banner carrinho"/>
          </div>
          <div className="items">
            <h2>Itens do Carrinho</h2>




          </div>

      </div>
  )
};

export default Carrinho;
