import { createContext, useContext } from "react";
import { useState } from "react";

export const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((old) => ({
      ...old,
      [product.id]: product,
    }));
  };
  return (
    <Cartcontext.Provider value={{ cart, addToCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => {
    const cart = useContext(Cartcontext)
    return cart
}