"use client"

import ProductList from "@/components/productList"
import ShoppingCartSidebar from "@/components/ShoppingCart"

const productList = [
  { id: 1, title: "Produkt 1", category: "Elektronikk", price: 149 },
  { id: 2, title: "Produkt 2", category: "Undertøy", price: 399 },
]

export default function ProductsPage() {
  return (
    <>
      <nav>
        <ShoppingCartSidebar></ShoppingCartSidebar>
      </nav>
    <div>
      <ProductList />
    </div>
    </>
  )
}
