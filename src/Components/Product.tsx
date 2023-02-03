import React, { FC } from "react";
import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  clickHandler(id: number): void;
}

const Product: FC<ProductProps> = ({ product, clickHandler }) => {
  return (
    <div>
      <div>{product.name}</div>
      <button onClick={() => clickHandler(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
