'use client';
import React, { useState } from "react"

import Products from "@/components/Products"
import ShoppingCartSidebar from "@/components/ShoppingCart";

export default function Home() {

  // const addedToCartList = [];

  // function addToCartClick() {
  //   addedToCartList.push
  // }

  

  return (
    <div className="flex flex-col">
      <div>
        <ShoppingCartSidebar></ShoppingCartSidebar>
      </div>
      <div className="flex flex-wrap justify-center">
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
      </div>
    </div>
  )
}
