import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localCart = window.localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    window.localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  };
  return (
    <Cartcontext.Provider value={{ cart, addToCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => {
  const cartList = useContext(Cartcontext);
  return cartList;
};
