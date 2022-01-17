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
  const removeFromCart = (productId) => {
    const newCart = [...cart];
    const newCartFromRemove = [];
    for (let item of newCart) {
      if (item.id !== productId) {
        newCartFromRemove.push(item);
      }
    }
    setCart(newCartFromRemove);
    window.localStorage.setItem("cart", JSON.stringify(newCartFromRemove));
    return newCartFromRemove;
  };
  return (
    <Cartcontext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => {
  const cartList = useContext(Cartcontext);
  return cartList;
};
