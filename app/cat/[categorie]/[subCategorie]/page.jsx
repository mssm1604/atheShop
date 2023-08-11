"use client"

import { CategorieHeader } from "@/components/cat/categorie/CategorieHeader"
import { ListOfProducts } from "@/components/cat/productType/ListOfProducts"
import { Filters } from "@/components/cat/productType/filters/Filters"
import { Header } from "@/components/header/Header"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useMemo, useState } from "react"

function useProductsList({ params }) {
  const [products, setProducts] = useState()
  const { filters, getProducts, filterProductsFn } = useProducts()
  const { productType, orderBy } = filters

  useEffect(() => {
    getProducts({ params, productType }).then((res) => setProducts(res))
  }, [filters])

  const orderedProducts = useMemo(() => {
    return orderBy !== "none"
      ? filterProductsFn({ products, sort: orderBy })
      : products
  }, [orderBy])

  return { products, orderedProducts }
}

function ProductTypeList({ params }) {
  const { categorie, productTypeList } = params
  const { products, orderedProducts } = useProductsList({ params })

  return (
    <>
      <Header headType={"mainView"} />
      <CategorieHeader categorieTitle={categorie} />
      <main>
        <Filters sectionName={params} />

        <ListOfProducts
          products={!orderedProducts ? products : orderedProducts}
          productTypeList={productTypeList}
        />
      </main>
    </>
  )
}

export default ProductTypeList
