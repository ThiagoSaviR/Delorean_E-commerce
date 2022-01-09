import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import { CartProvider } from "../contexts/cartContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
};

export default MyApp;
