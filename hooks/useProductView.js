import { getProducts } from "@/services/getProducts"

export function useProductView(params) {
  const getProductsFn = async () => {
    return await getProducts({ params })
  }

  return getProductsFn
}
