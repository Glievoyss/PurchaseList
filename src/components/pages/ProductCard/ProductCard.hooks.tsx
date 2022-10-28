import { useState, useCallback } from 'react';
import {  TProducts } from "data/types";

export const useProductCard = () => {
  const [products, setProducts] = useState<TProducts>();

  
  const handleCheck =(name: string) =>{
    setProducts(products?.map(product=>product.name===name?{...product,checked:!product.checked}:product));
  }

  return {
    products,
    setProducts,
    handleCheck
  };
};
