import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
