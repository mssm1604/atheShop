"use client"

import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const prevCart = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(prevCart)

  const findProductInCart = (idPr) => {
    return cart.findIndex((item) => item.id == idPr)
  }

  const addToCart = ({ id, prodName, prodType, price }, qt, size) => {
    const productLayout = {
      id,
      prodName,
      prodType,
      price,
    }

    const productInCartIndex = findProductInCart(productLayout.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += qt
      window.localStorage.setItem("cart", JSON.stringify(newCart))
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

    window.localStorage.setItem(
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
    window.localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const updateProduct = (productToUpdateId, { cantidad, talla }) => {
    const productInCartIndex = findProductInCart(productToUpdateId)
    const newCart = structuredClone(cart)

    newCart[productInCartIndex].quantity = cantidad
    newCart[productInCartIndex].size = talla

    window.localStorage.setItem("cart", JSON.stringify(newCart))
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
