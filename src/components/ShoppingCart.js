import React, { useState } from "react"
import CartContent from "@/components/CartContent"

const ShoppingCartSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={toggleSidebar}
          className="absolute right-4 top-4 z-10 float-left mr-2 cursor-pointer rounded bg-blue-500 px-4 py-2 text-xl font-bold text-white hover:bg-blue-700"
        >
          Shopping cart
        </button>
      </div>
      <div className="fixed right-0 top-0 h-full overflow-x-hidden bg-white shadow-lg transition-transform duration-300">
        <div
          className={`transform p-4 pt-20 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } fixed right-0 top-0 h-full overflow-x-hidden bg-white shadow-lg transition-transform duration-300`}
          style={{
            width: "300px",
          }}
        >
          {/* Add your shopping cart content here */}
          <p className=""><CartContent></CartContent></p>
          {/* Close button within the sidebar */}
        </div>
      </div>
    </>
  )
}

export default ShoppingCartSidebar
