import { useProducts } from '@/hooks/useProducts'
import { useEffect, useState } from 'react'

export function useProductsList({ params, numberProducts }) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [totalProducts, setTotaProducts] = useState(0)
	const productTypes = products?.map(product => product.prodType)

	const { filters, getProducts, filterProductsFn } = useProducts()
	const { productType } = filters

	const orderedProducts = filterProductsFn({ products })

	useEffect(() => {
		setLoading(true)
		getProducts({ params, productType, numberProducts })
			.then(({ formatedData, totalProducts: total }) => {
				setProducts(prevProducts => prevProducts.concat(formatedData))
				setTotaProducts(total)
			})
			.finally(() => setLoading(false))
	}, [numberProducts])

	return { orderedProducts, productTypes, totalProducts, loading }
}
