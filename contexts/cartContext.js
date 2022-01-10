import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localCart = window.localStorage.getItem('cart')
    if(localCart){
      setCart(JSON.parse(localCart))
    }
  }, [])
  const addToCart = (product) => {
   
    setCart((old) => {
      const newCart = {
        ...old,
        [product.id]: product,
      }
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    });
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