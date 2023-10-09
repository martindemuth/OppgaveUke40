import ProductCard from "./productCard"
import { createProduct, fakeProduct } from "./products/createProduct"

export default function ProductList() {


  const cartList: string[] = []

  const handleClick = (value: string) => {
    cartList.push(value)
  }

  const products = Array.from(
    createProduct({ count: 10, fakeProduct }).values(),
  )

  return (
    <>
      <div className="align-center flex flex-wrap justify-center gap-3">
        {products.map((product) => (
          <>
            <div className="mb-3 flex flex-col">
              <ProductCard key={product.id} {...product} />
              <button
                onClick={() => {
                  handleClick(product.title)
                }}
                className="mt-1 w-1/3 self-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Add to cart
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
