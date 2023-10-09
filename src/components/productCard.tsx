import { type ProductCardProps } from "./products/types"

export default function ProductCard(props: ProductCardProps) {

  const { id, title, description, tags, price} = props
  return (
    <div className="mx-2 flex max-w-sm items-center space-y-2 rounded-xl bg-white p-6 shadow-md ">
      <div className="">
        <div className="leading-sm float-right inline-flex items-center rounded-full bg-blue-200 px-3 py-1 text-xs font-bold uppercase text-blue-700">
          {tags}
        </div>
        <div className="mb-2 text-xl font-medium text-black">{title}</div>
        <p className="mb-2 text-gray-500">{description}</p>
        <p className="text-gray-700">{price} kroner</p>
      </div>
    </div>
  )
}
