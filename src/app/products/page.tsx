"use client"
import React, { useState } from 'react';
import ProductList from "@/components/productList"
import ShoppingCartSidebar from "@/components/ShoppingCart"

export default function ProductsPage() {

    // const [cartList, setCartList] = useState([]);
  
    // // Function to add a product to the cartList
    // const addToCart = (product) => {
    //   setCartList([...cartList, product]);
    // };
  

  return (
    <>
      <nav>
        <ShoppingCartSidebar></ShoppingCartSidebar>
      </nav>
      <div>
        <ProductList/>
      </div>
    </>
  )
}
