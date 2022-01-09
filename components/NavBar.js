import Image from "next/image";
import Link from "next/link";
import logo from "../public/store.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href={"/"}>
        <Image src={logo} alt="Logo da Loja" />
        </Link>
      </div>
      <div className="menu">
          <ul>
            <li><a href={`/section/consoles`}>Consoles</a></li>
            <li><a href={`/section/jogos`}>Jogos</a></li>
            <li><a href={`/section/acessorios`}>Acessórios</a></li>
            <li><a href={`/section/carrinho`}>Carrinho</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
