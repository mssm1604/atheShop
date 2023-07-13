"use client"

import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const prevCart = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(prevCart)

  const addToCart = (product, qt, size) => {
    const productLayout = {
      id: product.prID,
      brand: product.brand,
      productType: product.productType,
      price: product.price,
    }

    const productInCartIndex = cart.findIndex(
      (item) => item.id === productLayout.id
    )

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

  const findProductInCart = (idPr) => {
    return cart.findIndex((item) => item.id == idPr)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, findProductInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
