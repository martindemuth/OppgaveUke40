
import Dummy from "@/components/Dummy"

const Products = () => {
  const products = [
    {
      title: "Nordic Adventure Backpack",
      description:
        "Explore the wilderness with this durable and spacious backpack designed for outdoor enthusiasts. It features multiple compartments, adjustable straps, and waterproof material to keep your gear safe and dry.",
      price: "1,499 kroner",
    },
    {
      title: "Arctic Breeze Air Purifier",
      description:
        "Breathe clean and fresh air with the Arctic Breeze Air Purifier. This compact device removes airborne particles, allergens, and odors, ensuring a healthier living environment for you and your family.",
      price: "999 kroner",
    },
    {
      title: "Aurora Glow LED Desk Lamp",
      description:
        "Illuminate your workspace with the Aurora Glow LED Desk Lamp. This sleek and modern lamp offers adjustable brightness levels and color temperatures, making it perfect for reading, working, or relaxing.",
      price: "549 kroner",
    },
    {
      title: "Fjordview 10x42 Binoculars",
      description:
        "Get closer to nature with Fjordview 10x42 Binoculars. These high-quality binoculars provide crisp and clear optics, ideal for birdwatching, hiking, or any outdoor adventure.",
      price: "2,299 kroner",
    },
    {
      title: "Hygge Haven Plush Blanket",
      description:
        "Wrap yourself in comfort and warmth with the Hygge Haven Plush Blanket. Made from ultra-soft, hypoallergenic material, this cozy blanket is perfect for snuggling up on chilly evenings.",
      price: "699 kroner",
    },
    // Add more products as needed
  ]

  // Rest of the component

  const getRandomProduct = () => {
    return products[Math.floor(Math.random() * products.length)]
  }
  const Product = () => {
    const product = getRandomProduct()

    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 mb-2">
      <div className="">
      </div>
      <div>
        <div className="text-xl font-medium text-black mb-2">{product.title}</div>
        <p className="text-gray-500 mb-2">{product.description}</p>
        <p className="text-gray-700">{product.price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to cart</button>
      </div>
    </div>
    )
  }

  return (
    <div className="flex">
      <Product />
    </div>
  )
};

export default Products;
