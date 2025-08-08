import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  return (
    <BasketContext.Provider value={{ basket, setBasket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
