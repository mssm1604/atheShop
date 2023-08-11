import { FiltersContext } from "@/contexts/filtersContext"
import { useContext } from "react"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProductsFn = ({ products, sort = "none" }) => {
    const sortedProds =
      sort !== "none"
        ? products?.toSorted((a, b) => {
            if (sort == "low-high") return a.price - b.price
            if (sort == "high-low") return b.price - a.price
          })
        : products

    return sortedProds
  }

  return { filters, setFilters, filterProductsFn }
}
