"use client"

import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const prevCart = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(prevCart)

  const findProductInCart = (idPr) => {
    return cart.findIndex((item) => item.id == idPr)
  }

  const addToCart = (product, qt, size) => {
    const productLayout = {
      id: product.prID,
      brand: product.brand,
      productType: product.productType,
      price: product.price,
    }

    const productInCartIndex = findProductInCart(productLayout.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += qt
      localStorage.setItem("cart", JSON.stringify(newCart))
      return setCart(newCart)
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...productLayout,
        quantity: qt,
        size: size,
      },
    ])

    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...prevCart,
        {
          ...productLayout,
          quantity: qt,
          size,
        },
      ])
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteFromCart = (productToDeleteId) => {
    const newCart = cart.filter((item) => item.id != productToDeleteId)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const updateProduct = (productToUpdateId, { qt, size }) => {
    const productInCartIndex = findProductInCart(productToUpdateId)
    const newCart = structuredClone(cart)

    newCart[productInCartIndex].quantity = qt
    newCart[productInCartIndex].size = size

    localStorage.setItem("cart", JSON.stringify(newCart))
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        findProductInCart,
        deleteFromCart,
        updateProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
