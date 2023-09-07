import { FiltersContext } from '@/contexts/filtersContext'
import { useCallback, useContext } from 'react'

export function useFilters() {
	const { filters, setFilters } = useContext(FiltersContext)
	const { productType, orderBy: sort } = filters

	const filterProductsFn = ({ products }) => {
		const filteredByType =
			productType !== 'all'
				? products?.filter(product => productType?.includes(product.prodType))
				: products

		const filteredProducts =
			sort !== 'none'
				? filteredByType?.toSorted((a, b) => {
						if (sort == 'low-high') return a.price - b.price
						if (sort == 'high-low') return b.price - a.price
				  })
				: filteredByType

		return filteredProducts
	}

	return { filters, setFilters, filterProductsFn }
}
