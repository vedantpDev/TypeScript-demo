import React, { useState } from "react";
import Product from "./Components/Product";
import "./App.css";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "iphone",
      price: 1000,
    },
    {
      id: 2,
      name: "Samsung",
      price: 1000,
    },
    {
      id: 3,
      name: "vivo",
      price: 1000,
    },
  ]);

  const clickHandler = (id: number) => {
    console.log(id);
  };
  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          clickHandler={clickHandler}
        />
      ))}
    </>
  );
}

export default App;
