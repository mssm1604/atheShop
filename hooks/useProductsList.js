import { useProducts } from '@/hooks/useProducts'
import { useEffect, useState } from 'react'

export function useProductsList({ params, numberProducts }) {
	const [products, setProducts] = useState([])
	const [productTypesList, setProductTypesList] = useState()
	const [loading, setLoading] = useState(true)

	const { filters, getProducts, filterProductsFn } = useProducts()
	const { productType, orderBy } = filters

	useEffect(() => {
		setLoading(true)
		getProducts({ params, productType, numberProducts })
			.then(({ formatedData, productTypesList }) => {
				setProductTypesList(productTypesList)
				setProducts(prevProducts => prevProducts.concat(formatedData))
			})
			.finally(() => setLoading(false))
	}, [filters, numberProducts])

	const orderedProducts = filterProductsFn({ products, sort: orderBy })

	return { productTypesList, orderedProducts, loading }
}
