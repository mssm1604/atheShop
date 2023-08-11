import { getProducts } from "@/services/getProducts"
import { useFilters } from "./useFilters"

function useProducts() {
  const { filters, filterProductsFn } = useFilters()

  return { filters, getProducts, filterProductsFn }
}

export { useProducts }
