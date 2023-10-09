import type { CreateProducts, FakeProduct } from "./types"

export const fakeProduct: FakeProduct = {
  id: () => getRandomId(),
  title: () => getRandomListItem(fakeTitles),
  description: () => getRandomListItem(fakeDescriptions),
  tags: () => getRandomListItem(fakeTags),
  price: () => getRandomPrice(),
}

export const createProduct: CreateProducts = ({ count, fakeProduct }) => {
  const products = new Map()

  for (let i = 0; i < count; i++) {
    const product = {
      id: fakeProduct.id(),
      title: fakeProduct.title(),
      description: fakeProduct.description(),
      tags: fakeProduct.tags(),
      price: fakeProduct.price(),
    }

    products.set(`product-${i}`, product)
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return products
}

// functions used to generate a fake product
const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

const fakeTitles: string[] = [
  "Sleek Widget",
  "Gizmo Deluxe",
  "Tech Gadget",
  "Super Widgetizer",
  "Mega Gizmo",
  "Innovative Gizmo",
  "Ultimate Widget",
  "Smart Gizmo",
  "Precision Widget",
  "Epic Gizmo",
]

const fakeTags: string[] = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Toys & Games",
  "Beauty & Personal Care",
  "Books",
  "Health & Wellness",
  "Automotive",
  "Pet Supplies",
]

const fakeDescriptions: string[] = [
  "Smartphone - A sleek and powerful mobile device that allows you to make calls, send messages, browse the internet, and run various apps. Perfect for staying connected on the go.",
  "Laptop - A portable computer that's ideal for work, gaming, or entertainment. Laptops come in various sizes and configurations to suit different needs.",
  "Headphones - High-quality audio accessories that deliver immersive sound experiences. Available in over-ear, on-ear, and in-ear styles, with wired and wireless options.",
  "Digital Camera - Capture memories in stunning detail with a digital camera. Choose from compact point-and-shoot cameras or advanced DSLRs for photography enthusiasts.",
  "Fitness Tracker - Wearable devices that monitor your physical activity, heart rate, and sleep patterns. Great for tracking your fitness goals and maintaining a healthy lifestyle.",
  "Smartwatch - A wrist-worn device that combines the functionality of a watch with smart features like notifications, fitness tracking, and even mobile payments.",
  "Gaming Console - Gaming systems like Xbox, PlayStation, and Nintendo Switch that provide hours of entertainment with a wide range of video games and online multiplayer options.",
  "Home Security Camera - Keep your home safe with indoor and outdoor security cameras that offer live streaming, motion detection, and remote monitoring via your smartphone.",
  "Tablet - A versatile, portable touchscreen device that's great for browsing, reading, watching movies, and running apps. Suitable for work and entertainment.",
  "Kitchen Appliances - A variety of kitchen gadgets and appliances, including blenders, coffee makers, air fryers, and more, designed to make cooking and meal preparation easier.",
]

const getRandomListItem = <T>(items: T[]) => {
  // Generate a random index within the array's length.
  const randomIndex = Math.floor(Math.random() * items.length)
  // Return the random item from the array.
  return items[randomIndex]
}

const getRandomPrice = () => {
  const randomPrice = Math.floor(Math.random() * (2000 - 100 + 1)) + 100
  return randomPrice
}
