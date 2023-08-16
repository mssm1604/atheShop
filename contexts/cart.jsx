'use client'

import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
	const [cart, setCart] = useState([])

	useEffect(() => {
		const prevCart = JSON.parse(localStorage.getItem('cart')) || []
		setCart(prevCart)
	}, [])

	const findProductInCart = idPr => {
		return cart.findIndex(item => item.id == idPr)
	}

	const addToCart = ({ id, prodName, price, images, quantity, size }) => {
		const imageToUse = images[0]

		const productInCartIndex = findProductInCart(id)

		if (productInCartIndex >= 0) {
			const newCart = structuredClone(cart)
			newCart[productInCartIndex].quantity += quantity
			window.localStorage.setItem('cart', JSON.stringify(newCart))
			return setCart(newCart)
		}

		setCart(prevState => [
			...prevState,
			{
				id,
				prodName,
				price,
				imageToUse,
				quantity,
				size,
			},
		])

		localStorage.setItem(
			'cart',
			JSON.stringify([
				...cart,
				{
					id,
					prodName,
					price,
					imageToUse,
					quantity,
					size,
				},
			])
		)
	}

	const clearCart = () => {
		setCart([])
	}

	const deleteFromCart = productToDeleteId => {
		const newCart = cart.filter(item => item.id != productToDeleteId)
		setCart(newCart)
		localStorage.setItem('cart', JSON.stringify(newCart))
	}

	const updateProduct = (productToUpdateId, { cantidad, talla }) => {
		const productInCartIndex = findProductInCart(productToUpdateId)
		const newCart = structuredClone(cart)

		newCart[productInCartIndex].quantity = cantidad
		newCart[productInCartIndex].size = talla

		window.localStorage.setItem('cart', JSON.stringify(newCart))
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
