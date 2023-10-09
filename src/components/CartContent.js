import ProductList from "./productList";
import React, { useState } from "react"


const CartContent = () => {


  const [cartList, setCartList] = useState([]);
  
  // Function to add a product to the cartList
  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  return (
    <>
    <ProductList className="" cartList={cartList} addToCart={addToCart}/>
    <div className="flex flex-row fixed">
      <button className="m-2 text-lg">+</button>
      <button className="m-2 text-lg">-</button>
      <p className="m-2 font-bold">{cartList.map((item) => (
        {item}
      ))}</p>
    </div>
    </>
  )
}
export default CartContent;