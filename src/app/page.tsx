'use client';
import React, { useState } from "react"

import ShoppingCartSidebar from "@/components/ShoppingCart";

export default function Home() {

  const [title, setTitle] = useState("");

  // const addedToCartList = [];

  // function addToCartClick() {
  //   addedToCartList.push
  // }

  

  return (
    <div className="flex flex-col">
      <nav>
        <ShoppingCartSidebar></ShoppingCartSidebar>
      </nav>
      <div className="flex flex-wrap justify-center">
      </div>
    </div>
  )
}
