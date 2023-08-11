"use client"

import styles from "./productView.module.css"
import Image from "next/image"
import { Header } from "@/components/header/Header"
import { Slider } from "@/components/cat/productType/idProduct/Slider"
import { ProductInfo } from "@/components/cat/productType/idProduct/ProductInfo"
import { useEffect, useState } from "react"
import { getProducts } from "@/services/getProducts"

function useGetItem(params) {
  const [product, setProduct] = useState()

  useEffect(() => {
    getProducts({ params }).then(([res]) => setProduct(res))
  }, [])

  return product
}

function ProductView({ params }) {
  const product = useGetItem(params)
  return (
    <>
      <Header headType={"productsView"} />
      <div className={styles.pageWrapper}>
        <main className={styles.mainInfoWrapper}>
          <section className={styles.productPictures}>
            <ul>
              {product?.images?.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image}
                    alt="primera foto del sumario de fotos del producto de hombres"
                    fill
                  />
                </li>
              ))}
            </ul>
          </section>

          <Slider carouselImages={product?.images} />
          <ProductInfo
            product={product ? product : ""}
            ifProductInCartId={params.idProduct}
          />
        </main>

        <section className={styles.productDescription}>
          <div className={styles.description}>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              N. del T. persona que Lorem Ipsum es simplemente el texto de
              relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor N. del T. persona que
            </p>
          </div>

          <div className={styles.details}>
            <h3> Detalles del producto</h3>
            <ul className={styles.detailsList}>
              <li>100% algodón</li>
              <li>Cuello redondo</li>
              <li>Slim fit</li>
              <li>Logo clásico</li>
            </ul>
          </div>
        </section>
        {/*  */}
      </div>
    </>
  )
}

export default ProductView
