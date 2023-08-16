'use client'

import { useEffect, useState } from 'react'
import { useCart } from './useCart'

export function useProductInfo({ ifProductInCartId }) {
	const [productInCartIndex, setProductInCartIndex] = useState(null)
	const { cart, addToCart, findProductInCart } = useCart()

	const checkIfProductInCart = id => {
		const isProductInCart = findProductInCart(id)
		setProductInCartIndex(isProductInCart)
	}

	const onClickAddToCart = ({
		id,
		prodName,
		price,
		images,
		quantity,
		size,
	}) => {
		if (!size || !quantity) return
		addToCart({ id, prodName, price, images, quantity, size })
		setProductInCartIndex(cart.length + 1)
	}

	useEffect(() => {
		checkIfProductInCart(ifProductInCartId)
	}, [cart])

	return { cart, productInCartIndex, onClickAddToCart }
}
