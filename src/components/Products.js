

const Products = () => {
  const tags = [
    "Camping",
    "Clothing",
    "Electronics",
    "Outdoors",
    "Home Office",
    "Comfort",
  ]
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
    {
      title: "Stellar Star Projector",
      description:
        "Transform your room into a starry galaxy with the Stellar Star Projector. It projects a mesmerizing constellation of stars and nebulae on your ceiling, creating a soothing atmosphere for relaxation and sleep.",
      price: "499 kroner",
    },
    {
      title: "Gourmet Kitchen Knife Set",
      description:
        "Elevate your culinary skills with our Gourmet Kitchen Knife Set. This premium set includes a chef's knife, bread knife, utility knife, and more, all crafted with precision for effortless food preparation.",
      price: "1,299 kroner",
    },
    {
      title: "Adventure-Ready Camping Tent",
      description:
        "Embark on outdoor adventures with confidence using our Adventure-Ready Camping Tent. This spacious and weather-resistant tent is designed to withstand the elements, ensuring a comfortable camping experience.",
      price: "1,799 kroner",
    },
  ]

  const getRandomProduct = () => {
    return products[Math.floor(Math.random() * products.length)]
  }

  const getRandomTag = () => {
    return tags[Math.floor(Math.random() * tags.length)]
  }

  let items = [];

  // function addToCart(title) {
  //   items.push(title);
  // }
  const Product = () => {
    const product = getRandomProduct()
    const tag = getRandomTag()

    return (
      <div className="mx-auto mb-5 mr-3 flex max-w-sm flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-md ">
        <div className=""></div>
        <div className="basis-1/2">
          <div className="leading-sm float-right inline-flex items-center rounded-full bg-blue-200 px-3 py-1 text-xs font-bold uppercase text-blue-700">
            {tag}
          </div>
          <div className="mb-2 text-xl font-medium text-black">
            {product.title}
          </div>
          <p className="mb-2 text-gray-500">{product.description}</p>
          <p className="text-gray-700">{product.price}</p>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    )
  }

  return (

    <div className="">
      <Product />
    </div>
  )
}

export default Products
