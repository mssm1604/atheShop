"use client"

import { CategorieHeader } from "@/components/cat/categorie/CategorieHeader"
import { ListOfProducts } from "@/components/cat/productType/ListOfProducts"
import { Filters } from "@/components/cat/productType/filters/Filters"
import { Header } from "@/components/header/Header"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useState } from "react"

function useProductsList(params) {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(false)

  const { filters, getFilteredProducts } = useProducts()

  const getProductsFn = async () => {
    setLoading(true)
    const products = await getFilteredProducts(params)
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProductsFn()
  }, [filters])

  return { products, loading }
}

function ProductTypeList({ params }) {
  const { categorie, productTypeList } = params
  const { products, loading } = useProductsList(params)

  return (
    <>
      <Header headType={"mainView"} />
      <CategorieHeader categorieTitle={categorie} />
      <main>
        <Filters sectionName={params} />
        {loading ? (
          <div>
            <h2>cargando...</h2>
          </div>
        ) : (
          <ListOfProducts
            loading={loading}
            products={products}
            productTypeList={productTypeList}
          />
        )}
      </main>
    </>
  )
}

export default ProductTypeList
