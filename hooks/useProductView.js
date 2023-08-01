"use client"

import { useEffect, useState } from "react"
import { useProducts } from "@/hooks/useProducts"

export function useProductView(params) {
  const [product, setProduct] = useState([])
  const { getDataFromDb } = useProducts()

  const getProductsFn = async () => {
    const [products] = await getDataFromDb(params)
    setProduct(products)
  }

  useEffect(() => {
    getProductsFn()
  }, [])

  return product
}
