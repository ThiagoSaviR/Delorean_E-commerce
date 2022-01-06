import Link from "next/link";
import Image from "next/image";
import logo from "../public/store.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Logo da Loja" />
        </Link>
      </div>
      <div className="menu">
          <ul>
            <li><a href="">Consoles</a></li>
            <li><a href="">Jogos</a></li>
            <li><a href="">Acessórios</a></li>
            <li><a href="">Carrinho</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
