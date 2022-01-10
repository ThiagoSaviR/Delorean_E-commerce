import Image from "next/image";
import Link from "next/link";
import logo from "../public/store.png";
import { useCart } from "../contexts/cartContext";

const NavBar = () => {
  const cart = useCart();

  const itemsCount = Object.keys(cart.cart).length;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href={"/"}>
          <a>
            <Image src={logo} alt="Logo da Loja" />
          </a>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href={`/section/consoles`}>Consoles</a>
          </li>
          <li>
            <a href={`/section/jogos`}>Jogos</a>
          </li>
          <li>
            <a href={`/section/acessorios`}>Acessórios</a>
          </li>
          <li>
            <a href={`/section/carrinho`}>
              Carrinho
              {itemsCount > 0 && <span className="num-cart">{itemsCount}</span>}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
