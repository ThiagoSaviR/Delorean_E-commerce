import Image from "next/image";
import carrinho from "../../public/carrinho.png"

const Carrinho = () => {
  return (
      <div className="product-page">
          <Image src={carrinho} alt="Banner carrinho"/>
      </div>
  )
};

export default Carrinho;
