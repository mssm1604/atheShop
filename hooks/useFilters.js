import { FiltersContext } from "@/contexts/filtersContext"
import { useContext } from "react"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProductsFn = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.brand === "all" || product.brand === filters.brand)
      )
    })
  }



  return { filters, setFilters, filterProductsFn }
}
