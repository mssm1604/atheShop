"use client"

import { CategorieHeader } from "@/components/cat/categorie/CategorieHeader"
import { ListOfProducts } from "@/components/cat/productType/ListOfProducts"
import { Filters } from "@/components/cat/productType/filters/Filters"
import { Header } from "@/components/header/Header"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useState } from "react"

function ProductTypeList({ params }) {
  const [products, setProducts] = useState([])
  let { categorie, productTypeList } = params

  productTypeList.includes("%20") && (productTypeList = "Ready To Wear")

  const { filters, getFilteredProducts } = useProducts()

  const getProductsFn = async () => {
    const products = await getFilteredProducts(params)
    setProducts(products)
  }

  useEffect(() => {
    getProductsFn()
  }, [filters])

  return (
    <>
    <Header headType={'mainView'}/>
      <CategorieHeader
        urlImage={`../public/${categorie}Pic.jpg`}
        catTitle={`${categorie} ${productTypeList}`}
      />
      <main>
        {/* <Filters /> */}
        <ListOfProducts products={products} productTypeList={params.productTypeList}/>
      </main>
    </>
  )
}

export default ProductTypeList
