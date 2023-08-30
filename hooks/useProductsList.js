import { useProducts } from '@/hooks/useProducts'
import { useEffect, useState } from 'react'

export function useProductsList({ params }) {
	const [products, setProducts] = useState()
	const [productTypesList, setProductTypesList] = useState()
	const [loading, setLoading] = useState(false)

	const { filters, getProducts, filterProductsFn } = useProducts()
	const { productType, orderBy } = filters

	useEffect(() => {
		setLoading(true)
		getProducts({ params, productType })
			.then(({ formatedData, productTypesList }) => {
				setProductTypesList(productTypesList)
				setProducts(formatedData)
			})
			.finally(() => setLoading(false))
	}, [filters])

	const orderedProducts = filterProductsFn({ products, sort: orderBy })

	return { productTypesList, orderedProducts, loading }
}
